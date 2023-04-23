'use client'
import { useState,useEffect} from "react"
interface Props{
    submitAns:(ans:string)=> void,
    isOkAnswer:boolean,
    questionCount:number
    className?:string,
}


const AnswerBlock = ({submitAns,isOkAnswer,className,questionCount}:Props) => {
    const selectOptions = ['A','B','C','D'];
    const [ansArray,setAnsArray] = useState<string[]>([]);
    const sendAns = (e:string) => {
        submitAns(e);
    }
    const [isFinish,setFinish] = useState(false);
    useEffect(() => {
        if(ansArray.length > 0){
            const ansReply = `My Q${ansArray.length} answer is (${ansArray[ansArray.length - 1]})`;
            let ansQuery = `${ansReply}, ${process.env.NEXT_REPLY} ${process.env.GET_NEXT_QUESTION}`
            if(ansArray.length === questionCount){
                setFinish(true);
                ansQuery = `${ansReply}, ${process.env.NEXT_REPLY}`
            }
            sendAns(ansQuery)
        }
    },[ansArray]);
    return (
        <div className={`w-full p-2 bg-zinc-600 rounded-lg  ${className}`}>
            <p className="text-center text-white">
                {
                    !isFinish?`Select your Answer :`:`Thank for yout answer`
                }
            </p>
            <div className="flex mt-3 justify-around flex-wrap">
                {
                    !isFinish?(selectOptions.map((e,i)=>{
                        return (
                            <button key={i} disabled={!isOkAnswer} onClick={()=>{setAnsArray(ansArray => [...ansArray,e])}} className="w-1/5 rounded-md p-2 text-white bg-blue-300 disabled:bg-gray-500">
                                {e}
                            </button>
                        )
                    })):(
                        <button className="w-full rounded-md p-2 text-white bg-blue-500">
                            Finished Practice
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default AnswerBlock;