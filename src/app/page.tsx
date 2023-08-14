
import HomePage from "./pages/homepage/page"
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main className=" min-h-screen">
      <div  className={inter.className}>
        <HomePage></HomePage>
       </div>
    </main>
  )
}
