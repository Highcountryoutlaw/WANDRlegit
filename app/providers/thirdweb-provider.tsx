"use client"

import type React from "react"
import { ThirdwebProvider as ThirdwebReactProvider } from "thirdweb/react"
import { createThirdwebClient } from "thirdweb"

const client = createThirdwebClient({
  clientId: "523e564004da850816bdcf8d71afe8a1",
})

export function ThirdwebProvider({ children }: { children: React.ReactNode }) {
  return <ThirdwebReactProvider client={client}>{children}</ThirdwebReactProvider>
}
