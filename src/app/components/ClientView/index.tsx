import StyledComponentsRegistry from "@/app/styleRegistry";
import Header from "../Header";
interface Props{
    children:React.ReactNode
}
const ClientView = ({children}:Props) => {
    return (
        <StyledComponentsRegistry>
            <Header />
            {children}
        </StyledComponentsRegistry>
    )
}

export default ClientView;