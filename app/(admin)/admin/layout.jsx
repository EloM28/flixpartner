import LayoutAdmin from "@/app/ui/admin/layout"
import { SessionProvider } from "@/app/ui/context/auth";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {

  return (
    <SessionProvider>
    <div className="flex">
    <LayoutAdmin />
    <div className="w-full ">
    {children}
    </div>
    </div>
    </SessionProvider>
  );
}