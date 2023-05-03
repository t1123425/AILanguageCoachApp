'use client';
import { GPTData } from "@/global";
import { useState,useEffect,useRef} from "react";
import ReplyBlock from "./ReplyBlock";
import QnABlock from "./QnABlock";
import QuizBlock from "./QuizBlock";
import AnsBlock from "./AnsBlock";
import { useDispatch,useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux/es/types";
import { addQuiz} from "@/store/qnaSlice";
import { RootState, AppDispatch } from "@/store";
import { Alert, Spinner , Modal} from "flowbite-react";
interface Props{
    questionTemplate?:string,
    lang?:string | undefined,
    level:string | undefined,
    nLang?:string | undefined,
    qCounts?:string | undefined
}
interface QnaStatus{
    isLoad:boolean,
    isUpdate:boolean
    isError:boolean
}

export const useAppDispatch:()=> AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const QnAcontent = ({nLang,level,qCounts}:Props) => {
    const dispatch = useAppDispatch();
    const qnaRef = useRef<HTMLDivElement>(null);
    const [errorMsg,setErrorMsg] = useState('');
    const [ansCount,setAnsCount] = useState(0);
    const [qna,setQna] = useState<GPTData[]>([]);
    const [modalStatus,setModalStatus] = useState(false);
    const [explainMsg,setExplainMsg] = useState('');
    const [qnaStatus,setStatus] = useState<QnaStatus>({
        isLoad:false,
        isUpdate:true,
        isError:false
    })

    const callQnaApi = async () => {
        setStatus(qnaStatus => ({...qnaStatus,isLoad:true}))
        
        try{
            const gptBody = {
                qna:qna.map((e) => { return e.role === 'user'?{role:'user',content:e.content}:e}),
                level:level,
                nLang:nLang,
                ansCount:ansCount,
                qCounts:qCounts
            }
            const response = await fetch('/api/lang_qna',{
                method:'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(gptBody)
            })
            
            const res = await response.json();
            if (response.status !== 200) {
                throw res.error || new Error(`Request failed with status ${response.status}`);
            }
            // console.log('res',res);
            const choicesData = res.data.choices[0];
            const choicesMessage:GPTData = choicesData.message;
            if(choicesData.finish_reason === 'stop'){
                setStatus({isError:false,isLoad:false,isUpdate:false})
            }
            if(choicesMessage.role !== 'user'){
                const gptMsg = choicesMessage.content.replace('(/[\.]+/g','');
                if(isJsonString(gptMsg)){
                    const contentData = JSON.parse(gptMsg);
                    dispatch(addQuiz(contentData))
                }else{
                    dispatch(addQuiz({questions:choicesMessage.content}))
                }
                // console.log('contentData',contentData);
                
            }
            
            setQna(qna => [...qna,choicesMessage]);
        }catch(error:any){
            console.error(error);
            if(error){
                
                setErrorMsg(error?.message?.message)
            }
            setStatus(qnaStatus => ({...qnaStatus,isError:true,isUpdate:false}))

            reUpdate(3000);
        }
    }

    const submitAnswer = (ans:string,ansCounts:number) => {
        setAnsCount(ansCounts);
        setQna(qna => [...qna,{role:'user',content:ans,id:ansCounts}]);
        setStatus(qnaStatus => ({...qnaStatus,isUpdate:true}))
    }
    const reUpdate = (delaySec:number) => {
        setTimeout(()=>{
            setStatus(qnaStatus => ({...qnaStatus,isError:false,isUpdate:true}))
        },delaySec);
    }
    const isJsonString = (str:string) => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
    const showExplain = (msg:string) => {
        setExplainMsg(msg);
        setModalStatus(true);
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
    const renderQnaBlock = (e:GPTData) => {
        if(e.role === 'user' && e.id){
            return <AnsBlock ansIndex={e.id} content={e.content} openExplain={showExplain} />
        }else{
            if(isJsonString(e.content)){
                const contentData = JSON.parse(e.content.replace('(/[\.]+/g',''));
                return contentData.question ?<QuizBlock question={contentData.question}/>:null
            }else{
                return <QuizBlock question={e.content} />
            }
        }
    }
    return (
        <div className="grid grid-rows-3 grid-cols-1 w-full h-full relative p-2">
            <div className="overscroll-y-contain overflow-auto col-span-1 row-span-3">
                {
                    qna.map((e,i)=>{
                        
                        return (
                            <QnABlock key={i}>
                                {
                                    renderQnaBlock(e)
                                }
                            </QnABlock>
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
            {
                qCounts && <ReplyBlock questionCount={parseInt(qCounts)} isOkAnswer={!qnaStatus.isLoad && !qnaStatus.isError && !qnaStatus.isUpdate} submitAns={submitAnswer} className="col-span-1 row-end-end-1-1" />
            }
            <Modal
             dismissible={true}
             show={modalStatus}
             onClose={()=>{setModalStatus(false)}}>
                <Modal.Header>
                    Explain
                </Modal.Header>
                <Modal.Body>
                    <p>{explainMsg}</p>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default QnAcontent;