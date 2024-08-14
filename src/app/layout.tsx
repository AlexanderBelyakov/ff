import type { Metadata } from "next";
import { nunito, openSans, roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Friend Friend",
  description: " Найди друга и стань счастливым",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${openSans.variable} 
      ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
