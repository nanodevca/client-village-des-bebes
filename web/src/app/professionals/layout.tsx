import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Professionnels",
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
