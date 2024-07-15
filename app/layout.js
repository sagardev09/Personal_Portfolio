import { Montserrat } from "next/font/google";
import "./globals.css";
import {Navbar} from "./components/Navbar"


const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Sagardev",
  description: "This is sagar dabas personal website to showcase projects",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full w-full bg-[#000]">
        <div>
          <Navbar />
        </div>
        <div>
        {children}
        </div>   
        </div>
      </body>
    </html>
  );
}
