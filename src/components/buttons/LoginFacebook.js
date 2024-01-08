'use client';
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {signIn} from "next-auth/react";

export default function LoginFacebook() {

  return (
    <button
      onClick={() => signIn('facebook')}
      className="bg-white shadow text-center w-full py-4 flex gap-3 mt-2 items-center justify-center">
      <FontAwesomeIcon icon={faFacebook} className="h-6" />
      <span>Continue with Facebook</span>
    </button>
  );
}