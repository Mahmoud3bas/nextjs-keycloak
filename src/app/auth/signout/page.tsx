import Logout from "@/components/Logout";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";

export default async function SignoutPage() {
  const session = await auth();
  console.log(session)

  if (session) {
    return (
      <div className="flex flex-col space-y-3 justify-center items-center h-screen">
        <div className="text-xl font-bold">Signout</div>
        <div>Are you sure you want to sign out?</div>
        <div>
          <Logout />
        </div>
      </div>
    )
  }
  return redirect("/api/auth/signin")
}
