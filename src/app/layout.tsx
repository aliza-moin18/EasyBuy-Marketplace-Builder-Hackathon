import { Roboto, Open_Sans } from "next/font/google"; 
import "./globals.css"; 
import Top from "@/components/HeaderFooter/Header"; 
import Navbar from "@/components/HeaderFooter/Navbar"; 
import Footer from "@/components/HeaderFooter/Footer";
import { CartProvider } from "@/context/CartContext"; // Import CartProvider

// Google Fonts ko import karna
const roboto = Roboto({
  subsets: ["latin"], // Subsets for Roboto font
  weight: "400", // Roboto font weight
  variable: "--font-roboto", // CSS variable for Roboto
});

const openSans = Open_Sans({
  subsets: ["latin"], // Subsets for Open Sans font
  weight: "400", // Open Sans font weight
  variable: "--font-open-sans", // CSS variable for Open Sans
});

export const metadata = {
  title: "EasyBuy Marketplace",
  description: "Your app description",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${openSans.variable} antialiased`}>
        {/* Wrap the layout with CartProvider */}
        <CartProvider>
          <Top />
          <Navbar />
          {children} 
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}