import SetupForm from "../components/SetupForm"
import ClientView from "../components/ClientView"
import { redirect } from "next/navigation"
import getCurrentUser from "../actions/getCurrentUser"
export default async function SetupPage(){
    const userdata = await getCurrentUser();
    if(!userdata){
        redirect('/');
    }
    return (
        <ClientView userData={userdata}>
            <main className='w-full' >
                <section className="container mx-auto">
                    <div className="w-full max-w-6xl px-2 m-auto py-40 xl:py-36">
                        <h1 className="text-center text-3xl font-bold mb-6">Setup your language test</h1>
                        <SetupForm />
                    </div>
                </section>
            </main>
        </ClientView>
    )
}