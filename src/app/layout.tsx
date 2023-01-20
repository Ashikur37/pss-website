import Menu from './components/menu'
import './globals.css'
import { Oswald, EB_Garamond } from "@next/font/google"

const oswald = Oswald({ subsets: ["latin"], variable: '--font-oswald', });
const eb_garamond = EB_Garamond({ subsets: ["latin"], variable: '--font-eb-garamond' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${oswald.variable} ${eb_garamond.variable} font-sans`}>
        <Menu />
        {children}
        </body>
    </html>
  )
}
