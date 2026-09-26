import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jalene Event — Create the Moment",
  description: "Jalene Event creates and produces memorable experiences in Ethiopia.",
  keywords: ["Jalene Event", "Ethiopia events", "Addis Ababa events", "event management Ethiopia"],
  openGraph: { title: "Jalene Event", description: "Create the moment. Remember the experience.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}