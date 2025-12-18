import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef } from 'react';
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignIn () {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin() {
       
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        try{
            const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username,
                password
            })
            console.log("FULL RESPONSE:", response.data.token);
            localStorage.setItem('token', response.data.token);
            alert("Welcome to MindVault");
            navigate("/dashboard");
        } catch(e : any){
             alert(e.response?.data?.message || "Signin failed");
        }
        
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
                <Button onClick={signin} loading={false} variant="primary" text="SignIn" fullWidth={true} />
            </div>
        </div>
    </div>
}