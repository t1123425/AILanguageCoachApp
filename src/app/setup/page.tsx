import SetupForm from "../components/SetupForm"
import { store } from "@/store"
import { redirect } from "next/navigation"
export default function SetupPage(){
    if(!store.getState().user.currentUser){
        redirect('/');
    }
    return (
        <div className="w-full max-w-6xl px-2 m-auto pt-40 xl:pt-36">
            <h1 className="text-center text-3xl font-bold mb-6">Setup your language test</h1>
            <SetupForm />
        </div>
    )
}