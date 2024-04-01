import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Contact",
    template: "%s | LVDB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
