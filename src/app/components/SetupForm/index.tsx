'use client'
import {Label,Button,Select} from "flowbite-react";
import { useState } from "react";
import { useRouter} from 'next/navigation';
const SetupForm = () => {
    const router = useRouter();
    const [testSetup,setTest] = useState({
        langauge:'English',
        level:'A1 ~ A2'
    });
    const updateValue = (key:string,value:string) => {
        setTest(testSetup => ({...testSetup,[key]:value}))
    }
    const submitHandle = () => {
        router.push(`/qna/practice/?lang=${testSetup.langauge}&level=${testSetup.level}`)
    }
    return (
        <div className="w-full p-2">
            <div className="mb-2">
                <div className="mb-2 block">
                    <Label
                    htmlFor="lang">
                        Langauge
                    </Label>
                </div>
                <Select
                id="lang"
                required={true}
                defaultValue={testSetup.langauge}
                onChange={(e)=>{updateValue('language',e.target.value)}}>
                    <option value="English">English</option>
                </Select>
            </div>
            <div className="mb-2">
                <div className="mb-2 block">
                    <Label
                    htmlFor="level">
                        Level
                    </Label>
                </div>
                <Select
                id="level"
                required={true}
                defaultValue={testSetup.level}
                onChange={(e)=>{updateValue('level',e.target.value)}}>
                    <option value="A1 ~ A2">A1 ~ A2</option>
                    <option value="A1 ~ A2">B1 ~ B2</option>
                    <option value="C1 ~ C2">C1 ~ C2</option>
                </Select>
            </div>
            <div className="mb-2">
                <Button type="button" onClick={submitHandle}>
                    Start Test
                </Button>
            </div>
        </div>
    )
}
export default SetupForm;