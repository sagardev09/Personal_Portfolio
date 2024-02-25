import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Sagardev",
  description: "This is sagar dabas protfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full w-full bg-[#000]">
          {children}
        </div>
      </body>
    </html>
  );
}
