'use client';
import { MsgData } from "@/global";
import { useState,useEffect} from "react";
import AnswerBlock from "./AnswerBlock";
const QnABlock = ({role,content}:MsgData) => {
    return (
        <div className={'p-2 rounded-md my-2 text-white '+(role !== 'user'?'bg-blue-700':'bg-gray-500')}>
            <p className="text-bold divide-y divide-dashed">
                {
                    role !== 'user'?'Question':'Your Answer'
                }
            </p>
            <p className="m-0">
                {content}
            </p>
        </div>
    )
}

const QnAcontent = () => {
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
        setQna(qna => [...qna,{role:'user',content:`this question answer is ${ans}, is correct?`}]);
        setUpdate(true);
    }
    useEffect(()=>{
        if(!qna.length){
            if(process.env.QUESTION_TEMPLATE){
                const QnATemplate = process.env.QUESTION_TEMPLATE;
                setQna(qna => [...qna,{role:'system',content:QnATemplate}])
            }
            
        }else{
            if(isUpdate){
                console.log('run qna');
                callQnaApi()
            }
        }
        
    },[qna,isUpdate])
    return (
        <div className="w-full relative">
            <div className="overscroll-contain p-2">
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
            
            <AnswerBlock isLoad={isLoad} submitAns={submitAnswer} />
        </div>
    )
}

export default QnAcontent;