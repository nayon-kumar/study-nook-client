import { Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "animate.css";

const fontFraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata = {
  title: "Home - StudyNook",
  description:
    "StudyNook is a full-stack web application where students and library users can list study rooms they control (e.g., private rooms in a university library), and any registered user can browse, search, filter, and book those rooms for a specific date and time slot. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontFraunces.variable} h-full antialiased`}>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#F9F6F1]"
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}
