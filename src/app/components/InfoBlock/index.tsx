import Image from "next/image"
interface Props{
    rowDirect?:string,
    imageSrc:any,
    title:string,
    content:string
}
const InfoBlock = ({rowDirect,imageSrc,title,content}:Props) => {
    return (
      <div className={`flex items-center my-12 flex-col ${rowDirect}`}>
          <div className="w-1/2 text-center drop-shadow-lg">
              <Image src={imageSrc}  style={{maxWidth:256}} className="m-auto w-full"  alt="img" />
          </div>
          <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold my-6">
                {title}
              </h3>
              <p>
                {content}
              </p>
          </div>
      </div>
    )
  }

  export default InfoBlock;