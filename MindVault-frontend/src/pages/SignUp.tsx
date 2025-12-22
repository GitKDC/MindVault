import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef, useState } from 'react';
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignUp () {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [ error, setError ] = useState<{
        username?: string,
        password?: string
    }>({});
    const navigate = useNavigate();

    async function signup() {
        setError({});
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        try{
            await axios.post(BACKEND_URL + "/api/v1/signup", {
            username,
            password
            })
            console.log("Signup done")
            navigate("/signin")
            alert("You have signed up")
        } catch(e : any) {
            setError(e.response?.data?.error || { general: "Something went wrong" });
        }
        
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <div className="py-2">
                <Input ref={usernameRef} placeholder= "Username" />
            </div>
            {error.username && (
                <p className="text-red-500 text-xs mt-1">{error.username}</p>
            )}
            <div className="py-3">
                <Input ref={passwordRef} placeholder="Password" />
            </div>
            {error.password && (
                <p className="text-red-500 text-xs mt-1">{error.password}</p>
            )}
            <div className="flex justify-center py-1">
                <Button onClick={signup} loading={false} variant="primary" text="SignUp" fullWidth={true} />
            </div>
        </div>
    </div>
}