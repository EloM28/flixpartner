import DashClientLayout from "../../../ui/dasboard/layout"
import { SessionProvider } from "@/app/ui/context/auth";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {

  return (
    <SessionProvider>
    <div className="flex">
    <DashClientLayout />
    <div className="w-full ">
    {children}
    </div>
    </div>
    </SessionProvider>
  );
}