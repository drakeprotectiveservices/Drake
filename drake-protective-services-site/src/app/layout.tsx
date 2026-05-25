import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drake Protective Services",
  description: "Professional protective services, security consulting, and discreet client support throughout Maine and New England.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
