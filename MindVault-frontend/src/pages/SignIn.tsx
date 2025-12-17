import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef } from 'react';
import { BACKEND_URL } from "../config";
import axios from "axios";

export function SignIn () {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "api/v1/signup", {
            data : {
                username,
                password
            }
        })
        alert("You have signed up")
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <div className="py-2">
                <Input ref={usernameRef} placeholder= "Username" />
            </div>
            <div className="py-3">
                <Input ref={passwordRef} placeholder="Password" />
            </div>
            <div className="flex justify-center py-1">
                <Button loading={false} variant="primary" text="SignIn" fullWidth={true} />
            </div>
        </div>
    </div>
}