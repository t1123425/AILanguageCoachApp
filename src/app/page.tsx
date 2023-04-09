import Image from "next/image"
import learningImg from '../assets/img/learning.jpg'
import AIimg from '../assets/img/ai_knowledge.svg'
import qnaimg from '../assets/img/web_qna.svg'
import Link from "next/link"
export default function Home() {
  return (
    <section className="container flex flex-col mx-auto max-w-6xl pt-40 xl:pt-36">
        <div className="flex flex-wrap max-[1200px]:p-6">
          <div className="w-1/2 h-full flex flex-col pr-2">
              <h1 className="text-5xl font-black md:text-6xl/[70px]">
                Let AI help you practice your Language!!
              </h1>
              <div className="info my-8">
                <p className="p-2">
                When learning a language but not sure where to find effective practice and proficiency tests?
                <b>AI language coach</b> can helps you solve these problems and improve learning efficiency.
                </p>
              </div>
              <Link href={'/qna/practice'} className="w-32 font-bold text-center px-4 py-2 inline-block rounded-lg text-white bg-blue-400">
                  Get started
              </Link>
          </div>
          <div className="w-1/2 h-full flex flex-col drop-shadow-lg">
              <Image src={learningImg} className="rounded-lg" style={{width:'100%'}} alt="learning" />
          </div>
        </div>
        <div className="infoContent pt-[120px]">
            <h2 className="text-center text-3xl font-bold text-gray-900 md:text-3xl lg:text-3xl">
              Here are a few ways AI Language Coach can help
            </h2>
            <div className="infoBox flex items-center my-12">
              <div className="w-1/2 text-center drop-shadow-lg">
                <Image src={AIimg}  style={{maxWidth:256}} className="m-auto w-full"  alt="ai" />
              </div>
              <div className="w-1/2">
                  <h3 className="text-2xl font-bold my-12">
                    Language Proficiency Assessment:
                  </h3>
                  <p>
                    Let the AI language coach help you evaluate your language ability and provide improvement plan
                  </p>
              </div>
            </div>
            <div className="infoBox flex items-center my-12">
              <div className="w-1/2">
                  <h3 className="text-2xl font-bold my-12">
                    Language Proficiency Assessment:
                  </h3>
                  <p>
                    Let the AI language coach help you evaluate your language ability and provide improvement plan
                  </p>
              </div>
              <div className="w-1/2 text-center drop-shadow-lg">
                <Image src={qnaimg} style={{maxWidth:256}} className="m-auto w-full"  alt="ai" />
              </div>
            </div>
        </div>
      </section>
  )
}
