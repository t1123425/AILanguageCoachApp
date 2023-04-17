import { GPTData } from "@/global"
const QnABlock = ({role,content}:GPTData) => {
    return (
        <div className={'p-2 rounded-md my-2 text-white '+(role !== 'user'?'bg-blue-700':'bg-gray-500')}>
            <p className="m-0">
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
            </p>
        </div>
    )
}

export default QnABlock;