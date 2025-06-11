"use client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Base } from "@thirdweb-dev/chains";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <ThirdwebProvider activeChain={Base} clientId="YOUR_CLIENT_ID">
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
