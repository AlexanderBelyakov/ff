import { Nunito, Open_Sans as OpenSans, Roboto } from "next/font/google";

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["500", "800"],
  variable: "--nunito-font",
});

export const openSans = OpenSans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--open-sans-font",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--roboto-font",
});
