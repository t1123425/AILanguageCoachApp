import { LinksData, SafeUser } from "@/global"
import NavBar from "../Navbar"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDumbbell } from "@fortawesome/free-solid-svg-icons"
import { MenuBar } from "../Navbar/style"
// import { store } from "@/store"
import getCurrentUser from "@/app/actions/getCurrentUser"
const Header = async () => {
    const usedata = await getCurrentUser();
    const navLinks:LinksData[] = [
        // {
        //     text:'Practice',
        //     url:'/qna/practice'
        // },
        {
            text:'FAQ',
            url:'/faq'
        },
    ]
    return (
        <header className="w-full flex justify-center bg-blue-400">
            <nav className="w-full flex justify-between max-w-6xl px-6 py-2 md:py-4 md:px-12 lg:px-6 xl:px-0 relative">
                <input type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden" />
                <Link href={'/'} className="font-bold flex items-center z-20 transition-colors peer-checked:text-white">
                    <FontAwesomeIcon icon={faDumbbell} width={20} />
                    <span className="ml-2 text-sm lg:text-lg">AILanguageCoach(Beta 1.5)</span>
                </Link>
                <NavBar links={navLinks}  userName={usedata?.name} className="z-20 
                    hidden  
                    lg:block
                    lg:static
                    peer-checked:block" />
                <MenuBar role="button" size="25px" htmlFor="toggle_nav" className=" 
                    inline-block 
                    lg:hidden
                    peer-checked:after:rotate-[-45deg]
                    peer-checked:before:rotate-[45deg]
                    ">
                </MenuBar>
                <div className="fixed w-full h-full left-0 top-0 z-10 
                    transition 
                    duration-500 
                    bg-blue-900/70 
                    backdrop-blur-2xl 
                    peer-checked:origin-top 
                    peer-checked:scale-y-100
                    origin-bottom 
                    scale-y-0
                    lg:hidden
                    "></div>
            </nav>
        </header>
    )
}

export default Header as unknown as () => JSX.Element;