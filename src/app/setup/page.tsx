import SetupForm from "../components/SetupForm"
export default function SetupPage(){
    return (
        <div className="w-full max-w-6xl px-2 m-auto pt-40 xl:pt-36">
            <h1 className="text-center text-3xl font-bold mb-6">Setup your language test</h1>
            <SetupForm />
        </div>
    )
}