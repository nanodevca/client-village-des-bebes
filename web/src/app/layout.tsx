import "../css/globals.css";
import dynamic from "next/dynamic";
import type { Metadata, Viewport } from "next";
import { HomeLayoutContent } from "../components/home/homeLayoutContent";

export const viewport: Viewport = {
  themeColor: "#30B7FF",
  colorScheme: "light",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  width: "device-width",
  height: "device-height",
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    template: `%s | LVDB`,
    default: `Le village des bébés`,
  },
  description: `Mettre à l'honneur les richesses africaines qui entourent les jeunes mamans et bébés`,
  icons: [],
  generator: "Next.js",
  applicationName: "Le village des bébés",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Nanodev", url: "https://nanodev.ca" }],
  metadataBase: new URL("https://levillagedesbebes.ca"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "fr-FR": "/fr-FR",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
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
          <HomeLayoutContent>{children}</HomeLayoutContent>
        </NoSSR>
      </body>
    </html>
  );
}
