import type { ReactNode } from "react"

type ErrorMessageProps = {
    children: ReactNode
}

export default function ErrorMessage({children} : ErrorMessageProps) {
  return (
    <p className="bg-red-500 border-red-600 p-2 text-black font-bold text-sm text-center">
        {children}
    </p>
  )
}
