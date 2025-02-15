import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { SignInFlow } from "../SignInFlow";
// import { TriangleAlert } from "lucide-react";

interface SignInCardProp {
  setState: (state: SignInFlow) => void;
}

export function SignInCard({ setState }: SignInCardProp) {
  const { signIn } = useAuthActions();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  // const handlePassword = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setPending(true);

  //   await signIn("password", { email, password, flow: "signIn" })
  //     .catch(() => {
  //       setError("Invalid email or password");
  //     })
  //     .finally(() => {
  //       setPending(false);
  //     });
  // };

  const handleProvider = (value: "google" | "github") => {
    setPending(true);

    signIn(value).finally(() => {
      setPending(false);
    });
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to continue</CardTitle>
        <CardDescription>Use your Google Account or Github</CardDescription>
      </CardHeader>
      {/* {!!error && (
        <div className="bg-destructive/10 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
          <TriangleAlert className="size-4" />
          <p>{error}</p>
        </div>
      )} */}
      <CardContent className="px-0 pb-0 space-y-5">
        {/* <form action="" onSubmit={handlePassword} className="space-y-2.5">
          <Input
            disabled={pending}
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            value={email}
          />
          <Input
            disabled={pending}
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            value={password}
          />
          <Button className="w-full" type="submit" size="lg" disabled={pending}>
            Continue
          </Button>
        </form>

        <Separator /> */}

        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={pending}
            onClick={() => void handleProvider("google")}
            className="w-full relative"
            variant="outline"
            size="lg"
          >
            <FcGoogle className="size=5 absolute left-2.5 " />
            Continue with Google
          </Button>
          <Button
            disabled={pending}
            onClick={() => void handleProvider("github")}
            className="w-full relative"
            variant="outline"
            size="lg"
          >
            <FaGithub className="size-5 absolute left-2.5" />
            Continue with Github
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Don&apos;t have an account?{" "}
          <span
            onClick={() => setState && setState("signUp")}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </CardContent>
    </Card>
  );
}
