"use client"
import SignUpWithGoogleButton from "@/components/googlebutton"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect } from "react"
export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log("session: " + session)
    if (session?.user) {
      router.push("/");
    }
  }, [session])
  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-[10%]">
      <img src="/logo.png" alt="logo" className="h-24" />
      <SignUpWithGoogleButton></SignUpWithGoogleButton>
    </div>
  )
}