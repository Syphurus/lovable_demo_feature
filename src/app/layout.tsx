import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Backend Bridge - Lovable Feature Prototype",
  description: "Connect your frontend designs to real backend APIs easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
