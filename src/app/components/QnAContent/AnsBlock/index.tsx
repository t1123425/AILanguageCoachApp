'use client'
import { useMemo,useRef,useState,useEffect} from "react"
import { Button } from "flowbite-react"
import { useAppSelector} from ".."
interface AnsBlockProps{
    content:string,
    ansIndex:number,
    openExplain:(msg:string) => void
}
const AnsBlock = ({content,ansIndex,openExplain}:AnsBlockProps) => {
    const allQuiz = useAppSelector((state) => state.qna.quizs);
    const [btnStatus,setStatus] = useState(false);
    const explain = useRef<string | undefined >();
    const ansStatus = (status:boolean | null | undefined) => {
        if(!btnStatus){
            return 'bg-gray-500'
        }else{
            return status?'bg-green-500':'bg-red-500';
        }
    }
    const showExplain = useMemo(()=>{
        const checkAns =  allQuiz.filter(e => e.explain);
        if(checkAns[ansIndex - 1]){

            explain.current = checkAns[ansIndex - 1].explain;
            setStatus(true);
        }
        
        return checkAns[ansIndex - 1]?.isCorrect
    },[allQuiz])
    return (
        <div className={"p-2 flex rounded-md justify-between items-center relative "+ansStatus(showExplain)}>
            <p className="w-2/3">{content}</p>
            {
                btnStatus &&  <Button color="light"  onClick={()=>{ openExplain(explain.current?explain.current:'')}}>Explain</Button>
            }
        </div>
    )
}

export default AnsBlock;