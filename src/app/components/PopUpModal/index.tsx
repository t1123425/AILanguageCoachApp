'use client'
import { Modal} from "flowbite-react"
import { useState } from "react"
interface PopUpProps{
    btnText?:string,
    btnClassName?:string,
    title?:string,
    size?:string
    children?:React.ReactNode
}
const PopUpModal = ({btnText = 'open popup',title = 'please enter title',btnClassName,size='md',children}:PopUpProps) => {
    const [toggle,setToggle] = useState(false);
    return (
        <>
            <button className={btnClassName} onClick={()=>{setToggle(true)}}>
                {btnText}
            </button>
            <Modal
            show={toggle}
            dismissible={true}
            size={size}
            onClose={()=>{setToggle(false)}}>
                    <Modal.Header>
                        {title}
                    </Modal.Header>
                    <Modal.Body>
                        {children}
                    </Modal.Body>
            </Modal>
        </>
        
    )
}

export default PopUpModal;
