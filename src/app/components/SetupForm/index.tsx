'use client'
import {Label,Button,Select} from "flowbite-react";
import { useState } from "react";
import { useRouter} from 'next/navigation';
const SetupForm = () => {
    const router = useRouter();
    const languageList = ['English','Chinese','Japanese','Korean','French','Germen','Spanish','Italian','Portuguese','Dutch','Russian']
    const [testSetup,setTest] = useState({
        langauge:'English',
        level:'A1 ~ A2',
        nativeLanguage:'English',
        questionCounts:5
    });
    const updateValue = (key:string,value:string) => {
        setTest(testSetup => ({...testSetup,[key]:value}))
    }
    const submitHandle = () => {
        router.push(`/qna/practice/?nlang=${testSetup.nativeLanguage}&lang=${testSetup.langauge}&level=${testSetup.level}&qCounts=${testSetup.questionCounts}`)
    }
    return (
        <div className="w-full  p-5 border-blue-600 border-2 rounded-lg">
            <div className="mb-2">
                <div className="mb-2 block">
                    <Label
                    htmlFor="nlang"
                    className="font-bold">
                        Your native Langauge (to explain the answer)
                        </Label>
                </div>
                <Select
                id="lang"
                required={true}
                defaultValue={testSetup.langauge}
                onChange={(e)=>{updateValue('nativeLanguage',e.target.value)}}>
                    {
                        languageList.map((e,i) => {
                        return (<option key={i} value={e}>{e}</option>)})
                    }
                </Select>
            </div>
            <div className="mb-2">
                <div className="mb-2 block">
                    <Label
                    htmlFor="lang">
                      Language certification
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
                    <option value="A1 ~ A2">Beginner</option>
                    <option value="B1 ~ B2">Intermediate</option>
                    <option value="C1 ~ C2">Advanced</option>
                </Select>
            </div>
            <div className="mb-2">
                <div className="mb-2 block">
                    <Label
                    htmlFor="qCounts">
                        Question Counts
                    </Label>
                </div>
                <Select
                    id="qCounts"
                    required={true}
                    defaultValue={testSetup.questionCounts}
                    onChange={(e)=>{updateValue('questionCounts',e.target.value)}}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </Select>
            </div>
            <div className="mt-5">
                <Button type="button" onClick={submitHandle}>
                    Start it
                </Button>
            </div>
        </div>
    )
}
export default SetupForm;