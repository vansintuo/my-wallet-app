
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./works/Header";
import Footer from "./works/Footer";
import { ThemeProvider } from "next-themes"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <Header/>
            {children}
      <Footer/>
      </ThemeProvider>
      </body>
    </html>
  );
}