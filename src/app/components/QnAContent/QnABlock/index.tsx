// import { GPTData } from "@/global"

interface QnaProps{
    children:React.ReactNode
}
const QnABlock = ({children}:QnaProps) => {

    return (
        <div className={'my-2 text-white'}>
            {children}
            {/* <p className="m-0">
                {
                    content.split('\n').map((item,i) => {
                        return (
                            <span key={i}>
                                 {item}
                                 <br/>
                            </span>
                          
                        )
                     })
                }
            </p> */}
        </div>
    )
}

export default QnABlock;