import { LinksData } from "@/global"
import NavBar from "../Navbar"
import Link from "next/link"

const Header = () => {
    const navLinks:LinksData[] = [
        {
            text:'Practice',
            url:'/qna/practice'
        },
        {
            text:'About',
            url:'/about'
        },
    ]
    return (
        <header className="w-full flex justify-center bg-blue-400">
            <nav className="w-full flex justify-between max-w-6xl px-6 py-2 md:py-4 md:px-12 lg:px-6 xl:px-0">
                <Link href={'/'} className="font-bold">
                    AILanguageCoach
                </Link>
                <NavBar links={navLinks} />
            </nav>
        </header>
    )
}

export default Header;