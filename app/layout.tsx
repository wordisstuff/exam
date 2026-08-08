import "./globals.css";import type {Metadata} from "next";
export const metadata:Metadata={title:"Minnesota QB Exam Simulator",description:"Local practice simulator"};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
