'use client'
import { useState,useEffect} from "react"
interface Props{
    submitAns:(ans:string)=> void,
    isLoad:boolean,
    className?:string,
}

const AnswerBlock = ({submitAns,isLoad,className}:Props) => {
    const selectOptions = ['A','B','C','D'];
    const [ansArray,setAnsArray] = useState<string[]>([]);
    const questionCount = 2;
    const sendAns = (e:string) => {
        // const ansQuery = `this question i select (${e.toUpperCase()}) as answer, next!`
        
        submitAns(e);
    }
    useEffect(() => {
        if(ansArray.length > 0){
            let ansQuery = `Please generate the No.${ansArray.length+1} question following the previous rules `
            if(ansArray.length === questionCount){
                let ansOrder = '';
                ansArray.forEach((e,i) => {
                    ansOrder += `Q${(i+1)}.${e}`
                })
                ansQuery = `The answers of the previous questions are in order ${ansOrder}, 
                are they all correct? If there are any wrong answer, please testify. Thank you.`
            }
            sendAns(ansQuery)
        }
        console.log('ansArray:',ansArray)
    },[ansArray]);
    return (
        <div className={`w-full p-2 bg-zinc-600 rounded-lg  ${className}`}>
            <p className="text-center text-white">Select your Answer :</p>
            <div className="flex mt-3 justify-around flex-wrap">
                {
                    selectOptions.map((e,i)=>{
                        return (
                            <button key={i} disabled={isLoad} onClick={()=>{setAnsArray(ansArray => [...ansArray,e])}} className="w-1/5 rounded-md p-2 text-white bg-blue-300 disabled:bg-gray-500">
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