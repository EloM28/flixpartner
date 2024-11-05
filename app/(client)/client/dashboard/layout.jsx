import DashClientLayout from "../../../ui/dasboard/layout"
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {

  return (
    <div className="flex">
    <DashClientLayout />
    <div className="w-full ">
    {children}
    </div>
    </div>
  );
}