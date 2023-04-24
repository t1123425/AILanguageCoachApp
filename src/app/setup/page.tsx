import SetupForm from "../components/SetupForm"
export default function SetupPage(){
    return (
        <div className="w-full max-w-6xl m-auto pt-40 xl:pt-36">
            <h1 className="text-center font-bold">Setup your language test</h1>
            <SetupForm />
        </div>
    )
}