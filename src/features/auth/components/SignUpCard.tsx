import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { SignInFlow } from "../SignInFlow";

interface SignInCardProp {
  setState: (state: SignInFlow) => void;
}

export function SignUpCard({ setState }: SignInCardProp) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Register to continue</CardTitle>
        <CardDescription>Use your email or another service</CardDescription>
      </CardHeader>
      <CardContent className="px-0 pb-0 space-y-5">
        <form action="" className="space-y-2.5">
          <Input
            disabled={false}
            placeholder="Name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            value={name}
          />
          <Input
            disabled={false}
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            value={email}
          />
          <Input
            disabled={false}
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            value={password}
          />
          <Button className="w-full" type="submit" size="lg" disabled={false}>
            Continue
          </Button>
        </form>

        <Separator />

        <div className="flex flex-col gap-y-3">
          <Button
            disabled={false}
            onClick={() => {}}
            className="w-full relative"
            variant="outline"
            size="lg"
          >
            <FcGoogle className="size-5 absolute left-2.5 " />
            Continue with Google
          </Button>
          <Button
            disabled={false}
            onClick={() => {}}
            className="w-full relative"
            variant="outline"
            size="lg"
          >
            <FaGithub className="size-5 absolute left-2.5" />
            Continue with Github
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Already have an account?{" "}
          <span
            onClick={() => setState("signIn")}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </CardContent>
    </Card>
  );
}
