import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "L'organisation",
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
