import LoginGoogle from "@/components/buttons/LoginGoogle";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";


export default async function LoginPage() {

  const session = await getServerSession(authOptions);

  if (session) {
    return redirect('/account');
  }

  return (
    <div>
      <div className="p-4 max-w-xs mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">
          Sign In
        </h1>
        <p className="text-center mb-6 text-gray-500">
          Sign in to your account using one of the methods below
        </p>
        <LoginGoogle />
      </div>
    </div>
  );
}