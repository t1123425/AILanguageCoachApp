'use client'
import { useState,useEffect} from "react"
import { useRouter } from "next/navigation"
interface Props{
    submitAns:(ans:string,ansCounts:number)=> void,
    isOkAnswer:boolean,
    questionCount:number
    className?:string,
}


const AnswerBlock = ({submitAns,isOkAnswer,className,questionCount}:Props) => {
    const router = useRouter();
    const selectOptions = ['A','B','C','D'];
    const [ansArray,setAnsArray] = useState<string[]>([]);
    const sendAns = (e:string,ansCounts:number) => {
        submitAns(e,ansCounts);
    }
    const finishHandle = () => {
        router.push('/setup');
    }
    const [isFinish,setFinish] = useState(false);
    useEffect(() => {
        if(ansArray.length > 0){
            const ansReply = `My Q${ansArray.length} answer is (${ansArray[ansArray.length - 1]})`;
            // let ansQuery = `${ansReply}, ${process.env.NEXT_REPLY} ${process.env.GET_NEXT_QUESTION}`
            if(ansArray.length === questionCount){
                setFinish(true);
                // ansQuery = `${ansReply}, ${process.env.NEXT_REPLY} and stop generate question.`
            }
            sendAns(ansReply,ansArray.length)
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
                        <button onClick={finishHandle} className="w-full rounded-md p-2 text-white bg-blue-500">
                            Finished Practice
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default AnswerBlock;