import { MsgData } from "@/global"
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

export default QnABlock;