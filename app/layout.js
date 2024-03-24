import { Inter } from "next/font/google";
import { Providers } from "./redux/provider";
import Footer from "./components/navigation/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAQ&CO",
  description: "An ecommerce website by Sadique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
