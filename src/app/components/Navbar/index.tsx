import { LinksData } from "@/global"
import Link from "next/link"
interface Props{
    links:LinksData[],
    className?:string
}
const NavBar = ({links,className}:Props) => {
    return (
        <div className={className}>
            <ul className="flex 
                    flex-col 
                    lg:flex-row 
                    top-[50px] 
                    left-0
                    right-0
                    mx-auto
                    my-2
                    absolute
                    w-full
                    max-w-[calc(100%-1.5rem)] 
                    rounded-lg
                    border-2
                    border-white
                    text-white
                    lg:text-inherit
                    lg:border-0
                    lg:static 
                    lg:p-0 
                    lg:bg-transparent">
                {
                    links.map((e,i)=> {
                        return (
                            <li key={i}>
                                <Link href={e.url} className="py-3 px-2 block font-bold transition-colors hover:text-white lg:px-3 lg:py-0">
                                    {e.text}
                                </Link> 
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NavBar