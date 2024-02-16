import "./globals.css";
import { Navbarwrapper } from "../components/navbar/index";
import Footer from "../components/footer";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Le village des bébés",
  description:
    "Mettre à l'honneur les richesses africaines qui entourent les jeunes mamans et bébés",
};

const _NoSSR = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const NoSSR = dynamic(() => Promise.resolve(_NoSSR), { ssr: false });

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
        <NoSSR>
          <Navbarwrapper />
          {children}
          <Footer />
        </NoSSR>
      </body>
    </html>
  );
}
