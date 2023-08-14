import { Navigation } from "./components/navbar/navigation";
import { Footer } from "./components/footer/footer";
import "./styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SEED Latam",
  description: "Comunidad Latinoaméricana Web3",
};

export default function RootLayout({children,}: 
  {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <Navigation></Navigation>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
