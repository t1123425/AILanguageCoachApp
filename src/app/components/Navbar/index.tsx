'use client'
import { LinksData } from "@/global"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser,faPersonRunning} from "@fortawesome/free-solid-svg-icons"
import { Dropdown } from "flowbite-react"
import { signOut } from "next-auth/react"
import { useAppDispatch } from "../QnAContent"
import { initUser } from "@/store/userSlice"

interface Props{
    links:LinksData[],
    className?:string,
    userName?:string | null
}
const NavBar = ({links,className,userName}:Props) => {
    const dispatch = useAppDispatch();
    const SignOut = () => {
        signOut()
        dispatch(initUser());
    }
    return (
        <div className={className}>
            <ul className="flex 
                    flex-col 
                    top-[50px] 
                    left-0
                    right-0
                    mx-auto
                    absolute
                    w-full
                    rounded-lg
                    border-2
                    p-2
                    border-white
                    text-white
                    lg:flex-row 
                    lg:text-inherit
                    lg:border-0
                    lg:static 
                    lg:p-0 
                    lg:bg-transparent
                    lg:items-center">
                {
                    links.map((e,i)=> {
                        return (
                            <li key={i} className="lg:mx-2">
                                <Link href={e.url} className="py-3 px-2 block font-bold transition-colors hover:text-white lg:px-3 lg:py-0">
                                    {e.text}
                                </Link> 
                            </li>
                        )
                    })
                }
                <li className="mt-5 border-t-2 border-white pt-2 lg:border-none lg:p-0 lg:m-0">
                    {
                        userName &&
                        <Dropdown label={userName}>
                            <Dropdown.Header>
                              <FontAwesomeIcon 
                                className="mr-2"
                                icon={faUser} />
                                {userName}
                            </Dropdown.Header>
                            <Dropdown.Item>
                                <FontAwesomeIcon 
                                    className="mr-2"
                                    icon={faPersonRunning} />
                                <button onClick={SignOut} className="text-sm font-bold text-center px-1 py-1">
                                    Logout
                                </button>
                            </Dropdown.Item>
                        </Dropdown>
                    }
                     {/* <button className="w-full text-sm font font-bold text-white text-center rounded-lg px-4 py-1 transition-transform hover:scale-105 bg-gradient-to-r  from-blue-500 to-blue-700">
                            Sign In
                        </button> */}
                </li>
            </ul>
        </div>
    )
}

export default NavBar