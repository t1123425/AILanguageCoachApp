import { QuizType } from "@/store/qnaSlice";
const QuizBlock = ({question,options}:QuizType) => {
    return (
        <div className="bg-blue-500 p-2 rounded-md">
            <p>{question}</p>
            <div className="flex flex-col">
                {
                  options &&  Object.keys(options).map((e,i)=>{
                        return (
                            <span key={i}>
                                {
                                    `(${e}) ${options[e]}`
                                }
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default  QuizBlock;