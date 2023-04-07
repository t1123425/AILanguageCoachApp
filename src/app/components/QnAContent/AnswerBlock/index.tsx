interface Props{
    submitAns:(ans:string)=> void,
    isLoad:boolean,
    className?:string
}
const AnswerBlock = ({submitAns,isLoad,className}:Props) => {
    const selectOptions = ['a','b','c','d'];
    return (
        <div className={`w-full p-1 bg-zinc-600  ${className}`}>
            <p>Select your Answer :</p>
            <div className="flex mt-3 justify-around flex-wrap">
                {
                    selectOptions.map((e,i)=>{
                        return (
                            <button key={i} disabled={isLoad} onClick={()=>{submitAns(e)}} className="w-1/5 rounded-md p-2 text-white bg-blue-300">
                                {e.toUpperCase()}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AnswerBlock;