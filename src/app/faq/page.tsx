import Link from "next/link"
import ClientView from "../components/ClientView"
import getCurrentUser from "../actions/getCurrentUser"
export default async function FAQPage(){
    const userdata = await getCurrentUser();
    return (
        <ClientView userData={userdata}>
            <main className='w-full h-full' >
                <section className="container flex flex-col mx-auto max-w-6xl pt-40 xl:pt-36">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-black text-blue-500">
                            FAQ
                        </h1>
                        <h2 className="text-[16px] mt-3 font-bold">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="p-5 border-blue-600 border-2 rounded-lg my-3">
                        <h3 className="text-2xl font-extrabold text-blue-500 mb-4">
                            What is AI Language Coach?
                        </h3>
                        <p>{`AI Language Coach is a web application combined with chatGPT. 
                            We simplify the mode of communicating with AI and provide a variety of language exercises to help you learn languages with less effort.`}</p>
                    </div>
                    <div className="p-5 border-blue-600 border-2 rounded-lg my-3">
                        <h3 className="text-2xl font-extrabold text-blue-500 mb-4">
                            What is AI Language Coach for?
                        </h3>
                        <p>At present, it is mainly provided for those who have basic language skills but want to improve in the future and prepare to obtain relevant language certificates.</p>
                    </div>
                    <div className="p-5 border-blue-600 border-2 rounded-lg my-3">
                        <h3 className="text-2xl font-extrabold text-blue-500 mb-4">
                            {
                                ` What's next for AI language coach?`
                            }
                        </h3>
                        <p>
                            I will announce the progress and news of the current project on <Link href="https://twitter.com/TheLabOfTYLife" className=" underline font-bold underline-offset-8 text-blue-600" target="_blank">my Twitter</Link>. 
                            In addition, the function update will determine the next development plan according to various <Link href={'https://tlcr8p8abmb.typeform.com/to/h9RRc8eU'} target="_blank" className=" underline font-bold underline-offset-8 text-blue-600">feedbacks</Link> on the progress.
                        </p>
                    </div>
                </section>
            </main>
        </ClientView>
    )
}