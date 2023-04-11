'use client';
import { MsgData } from "@/global";
import { useState,useEffect} from "react";
import AnswerBlock from "./AnswerBlock";
import QnABlock from "./QnABlock";
interface Props{
    questionTemplate:string
}
const QnAcontent = ({questionTemplate}:Props) => {
    const [qna,setQna] = useState<MsgData[]>([]);
    const [isLoad,setLoading] = useState(false);
    const [isUpdate,setUpdate] = useState(true);
    const callQnaApi = async () => {
        setLoading(true);
        try{
            const response = await fetch('/api/lang_qna',{
                method:'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({qna:qna})
            })
            
            const res = await response.json();
            if (response.status !== 200) {
                throw res.error || new Error(`Request failed with status ${response.status}`);
            }
            setLoading(false);
            console.log(res);
            const choicesData = res.data.choices[0];
            const choicesMessage:MsgData = choicesData.message;
            if(choicesData.finish_reason === 'stop'){
                setUpdate(false)
            }
            setQna(qna => [...qna,choicesMessage]);
        }catch(error){
            setLoading(false);
            setUpdate(false);
            console.error(error);
        }
    }

    const submitAnswer = (ans:string) => {
        setQna(qna => [...qna,{role:'user',content:ans}]);
        setUpdate(true);
    }

    useEffect(()=>{
        if(!qna.length){
            // if(process.env.QUESTION_TEMPLATE){
            //     const QnATemplate = process.env.QUESTION_TEMPLATE;
            // } 
            setQna(qna => [...qna,{role:'system',content:questionTemplate}])
        }else{
            if(isUpdate){
                console.log('run qna');
                callQnaApi()
            }
        }
        
    },[qna,isUpdate])
    return (
        <div className="grid grid-rows-3 grid-cols-1 w-full relative p-2" style={{height:'calc(100% - 92px)'}}>
            <div className="overscroll-y-contain overflow-auto col-span-1 row-span-3">
                {
                    qna.map((e,i)=>{
                        return (
                            <QnABlock key={i} role={e.role} content={e.content} />
                        )
                    })
                }
                {
                    isLoad && <p className="text-center my-3">Loading....</p>
                }
            </div>
            <AnswerBlock isLoad={isLoad} submitAns={submitAnswer} className="col-span-1 row-end-end-1-1" />
        </div>
    )
}

export default QnAcontent;