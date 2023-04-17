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
            let ansQuery = `My Q${ansArray.length} answer is ${ansArray[ansArray.length - 1]}, Please generate the next question that following the previous rules.`
            if(ansArray.length === questionCount){
                // let ansOrder = '';
                // ansArray.forEach((e,i) => {
                //     ansOrder += `Q${(i+1)}.${e} `
                // })
                setFinish(true);
                ansQuery = `My Q${ansArray.length} answer is ${ansArray[ansArray.length - 1]} , Are the answers to the previous questions correct? Please testify if I am wrong.`
            }
            sendAns(ansQuery)
        }
    },[ansArray]);
    return (
        <div className={`w-full p-2 bg-zinc-600 rounded-lg  ${className}`}>
            <p className="text-center text-white">Select your Answer :</p>
            <div className="flex mt-3 justify-around flex-wrap">
                {
                    selectOptions.map((e,i)=>{
                        return (
                            <button key={i} disabled={!isOkAnswer || isFinish} onClick={()=>{setAnsArray(ansArray => [...ansArray,e])}} className="w-1/5 rounded-md p-2 text-white bg-blue-300 disabled:bg-gray-500">
                                {e}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AnswerBlock;