'use client'
import { signIn } from "next-auth/react";
import PopUpModal from "../PopUpModal"
import { FcGoogle } from 'react-icons/fc';

const SignInModal = () => {
    return (
        <PopUpModal btnText="Get started" title="Please log in google" btnClassName="w-32 font-bold text-center px-4 py-2 inline-block rounded-lg text-white bg-blue-400 transition-transform hover:scale-110">
            <button onClick={()=>{ signIn('google')}} className="w-full flex p-2 items-center justify-center border-2 border-gray-600 rounded-lg">
                <FcGoogle />
                <span className="font-bold mx-5 align-middle">SignIn</span> 
            </button>
        </PopUpModal>
    )
}

export default SignInModal;