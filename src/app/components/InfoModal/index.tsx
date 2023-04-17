// import { Modal } from "flowbite"
'use client';

import { Modal , Button} from "flowbite-react";
import { useState } from 'react';
interface Props{
    title:string
    children:React.ReactNode
}
const InfoModal = ({title,children}:Props) =>  {
    const [toggle ,setToggle] = useState(true);
    return (
        <Modal
        show={toggle}>
            <Modal.Header>
                {title}
            </Modal.Header>
            <Modal.Body>
            <div className="space-y-6">
                {
                    children
                }
            </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>{setToggle(false)}}>
                    Start
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default InfoModal