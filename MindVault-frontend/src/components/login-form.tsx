import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import axios from "axios"
import { BACKEND_URL } from "@/config"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signin(e) {
        e.preventDefault();
       
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        try{
            const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username,
                password
            })
            console.log("FULL RESPONSE:", response.data.token);
            localStorage.setItem('token', response.data.token);
            window.alert("Welcome to MindVault");
            navigate("/dashboard");
        } catch(e : any){
             alert(e.response?.data?.message || "Signin failed");
        }
        
    } 


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your username below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  ref={usernameRef}
                  placeholder="m@example.com"
                  required

                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input ref={passwordRef} id="password" type="password" required />
              </Field>
              <Field>
                <Button onClick={signin} type="submit">Login</Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="/signup">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
