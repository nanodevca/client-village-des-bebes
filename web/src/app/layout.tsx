import "./globals.css";
import { Navbarwrapper } from "../components/navbar/index";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Le village des bébés",
  description:
    "Mettre à l'honneur les richesses africaines qui entourent les jeunes mamans et bébés",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/assets/images/company/logo.png" />
      </head>
      <body>
        <Navbarwrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
