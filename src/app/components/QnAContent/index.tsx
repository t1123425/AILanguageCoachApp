'use client';
import { GPTData } from "@/global";
import { useState,useEffect,useRef} from "react";
import AnswerBlock from "./AnswerBlock";
import QnABlock from "./QnABlock";
import { Alert, Spinner} from "flowbite-react";
interface Props{
    questionTemplate?:string,
    questionCounts:number
    lang?:string | undefined,
    level:string | undefined,
    nLang?:string | undefined,
}
interface QnaStatus{
    isLoad:boolean,
    isUpdate:boolean
    isError:boolean
}



const QnAcontent = ({questionCounts,nLang,level}:Props) => {
    const qnaRef = useRef<HTMLDivElement>(null);
    const [errorMsg,setErrorMsg] = useState('');
    const [qna,setQna] = useState<GPTData[]>([]);
    const [qnaStatus,setStatus] = useState<QnaStatus>({
        isLoad:false,
        isUpdate:true,
        isError:false
    })

    const callQnaApi = async () => {
        setStatus(qnaStatus => ({...qnaStatus,isLoad:true}))
        try{
            const response = await fetch('/api/lang_qna',{
                method:'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({qna:qna,
                                    level:level})
            })
            
            const res = await response.json();
            if (response.status !== 200) {
                throw res.error || new Error(`Request failed with status ${response.status}`);
            }
            // console.log(res);
            const choicesData = res.data.choices[0];
            const choicesMessage:GPTData = choicesData.message;
            if(choicesData.finish_reason === 'stop'){
                setStatus({isError:false,isLoad:false,isUpdate:false})
            }
            setQna(qna => [...qna,choicesMessage]);
        }catch(error:any){
            console.error(error);
            if(error){
                setErrorMsg(error?.message?.message)
            }
            setStatus(qnaStatus => ({...qnaStatus,isError:true,isUpdate:false}))
            // if(error.callback === 're-call'){
            //     reUpdate(3000);
            // }
            reUpdate(3000);
        }
    }

    const submitAnswer = (ans:string) => {
        
        setQna(qna => [...qna,{role:'user',content:ans}]);
        setStatus(qnaStatus => ({...qnaStatus,isUpdate:true}))
    }
    const reUpdate = (delaySec:number) => {
        setTimeout(()=>{
            setStatus(qnaStatus => ({...qnaStatus,isUpdate:true}))
        },delaySec);
    }
    useEffect(()=>{
        if(qnaStatus.isUpdate){
            callQnaApi()
        }
        if(qnaRef.current){
            // console.log('run scroll');
            qnaRef.current.scrollIntoView({behavior: 'smooth' });
        }
        
        
    },[qnaStatus.isUpdate])
    return (
        <div className="grid grid-rows-3 grid-cols-1 w-full h-full relative p-2">
            <div className="overscroll-y-contain overflow-auto col-span-1 row-span-3">
                {
                    qna.map((e,i)=>{
                        return (
                            <QnABlock key={i} role={e.role} content={e.content} />
                        )
                    })
                }
                {
                    qnaStatus.isLoad && <p className="text-center my-3"><Spinner aria-label="Default status example" className="mr-2" />Loading....</p>
                }
                <div ref={qnaRef}></div>
            </div>
            {
                qnaStatus.isError && <Alert color="failure" rounded={true}><span className="font-bold mr-3">Error</span>{errorMsg}</Alert>
            }
            <AnswerBlock questionCount={questionCounts} isOkAnswer={!qnaStatus.isLoad && !qnaStatus.isError && !qnaStatus.isUpdate} submitAns={submitAnswer} className="col-span-1 row-end-end-1-1" />
        </div>
    )
}

export default QnAcontent;