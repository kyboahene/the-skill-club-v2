import { toast } from "sonner";
import { twMerge } from "tailwind-merge"
import { type ClassValue, clsx } from "clsx"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const Capitalize = (word: string) => {
  const words = word.split(' ');
  const capitalizedWords = words.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join(' ');
};

// export function showErrorMessage(title: string, error: any) {
//   return toast.error(title, {
//     position: "top-right",
//     description: `${error?.code === "invalid-argument"
//       ? CUSTOM_ERRORS[error?.message as keyof typeof CUSTOM_ERRORS]
//       : FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]
//       }`,
//   });
// }

export function showCustomErrorMessage(title: string, message: string) {
  return toast.error(title, {
    position: "top-right",
    description: message,
  });
}

export function showSuccessMessage(title: string, message: string) {
  return toast.success(title, {
    position: "top-right",
    description: message,
  });
}


export const requestOptions = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

export function defaultOptions(json: any) {
  return {
    loop: true,
    autoplay: true,
    animationData: json,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
}