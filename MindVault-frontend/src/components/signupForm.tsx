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
import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
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


  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">username</FieldLabel>
              <Input
                ref={usernameRef}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input ref={passwordRef} id="password" type="password" required />
              <FieldDescription>
                Must be at least 6 characters long.
              </FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button onClick={signup} type="submit">Create Account</Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="/signin">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
