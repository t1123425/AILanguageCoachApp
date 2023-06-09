import Image from "next/image"
import learningImg from '../assets/img/learning.jpg'
import Dialogue from '../assets/img/dialogue.svg'
import Specialization from '../assets/img/specialization.svg'
import InfoBlock from "./components/InfoBlock"
import Link from "next/link"
import ClientView from "./components/ClientView"
import SignInModal from "./components/SignInModal"
import getCurrentUser from "./actions/getCurrentUser"
export default async function Home() {
  const usedata = await getCurrentUser();
  const infos = [
    {
      id:1,
      title:'Customized Practice Mode:',
      content:'You can choose different language certification levels to do exercises and provide explanations in your native language.',
      imageSrc:Specialization,
      rowDirect:'lg:flex-row'
    },
    {
      id:2,
      title:'Various situational dialogue exercises:',
      content:'Provide situational dialogues including daily life, business, travel, social interaction, etc.',
      imageSrc:Dialogue,
      rowDirect:'lg:flex-row-reverse'
    }
  ]
    
  return (
    <ClientView userData={usedata}>
        <main className="w-full bg-white-500">
          <section className="container flex flex-col mx-auto max-w-6xl max-[1200px]:px-3 pt-32 xl:pt-36">
            <div className="flex flex-wrap flex-col lg:flex-row">
              <div className="h-full flex flex-col pr-2 pb-6 lg:pb-2 lg:w-1/2">
                  <h1 className="text-5xl  font-black text-center lg:text-left md:text-6xl/[70px]">
                    Let AI help you practice your Language!
                  </h1>
                  <div className="info my-8">
                    <p className="p-2 text-center lg:text-left">
                    When learning a language but not sure where to find effective practice and proficiency tests?
                    <b>AI language coach</b> can helps you solve these problems and improve learning efficiency.
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    {
                      usedata?
                      <Link href={'/setup'} className="w-32 font-bold text-center px-4 py-2 
                      inline-block rounded-lg text-white bg-blue-400 transition-transform hover:scale-110">
                        Get started
                      </Link>:<SignInModal />
                    }

                  </div>
              </div>
              <div className="h-full flex flex-col drop-shadow-lg lg:w-1/2">
                  <Image src={learningImg} className="rounded-lg" style={{width:'100%'}} alt="learning" />
              </div>
            </div>
            <div className="infoContent pt-[120px] ">
                <h2 className="text-center text-3xl font-bold text-gray-900 md:text-3xl lg:text-3xl">
                  Here are a few ways AI Language Coach can help
                </h2>
                {
                  infos.map((e)=>{
                    return (
                      <InfoBlock key={e.id} 
                                title={e.title} 
                                content={e.content}
                                imageSrc={e.imageSrc}
                                rowDirect={e.rowDirect} />
                    )
                  })
                }
            </div>
          </section>
        </main>
    </ClientView>
    
  )
}
