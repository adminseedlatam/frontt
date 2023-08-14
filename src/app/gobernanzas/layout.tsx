
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SEED Latam",
  description: "Comunidad Latinoaméricana Web3",
};

export default function LinkLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className={inter.className}>
      {children}
    </section>
  )
}