import React from "react";
import { signInWithProvider } from "../../actions";
import Google from "@/assets/icons/social/google";

type SignInWithProviderProps = {
  text: string;
};

const SignInWithProvider = ({ text }: SignInWithProviderProps) => {
  return (
    <button
      type="button"
      className="w-full"
      onClick={() => signInWithProvider({ provider: "provider" })}
    >
      <div className="flex justify-center py-3 px-2 cursor-pointer rounded-[35px] bg-gradient-to-r from-[#f5e800] to-[#7eed5e]">
        <div className="flex items-center gap-3">
          <div className="p-1 rounded-full bg-white">
            <Google />
          </div>
          <p className="text-sm"> {text}</p>
        </div>
      </div>
    </button>
  );
};

export default SignInWithProvider;
