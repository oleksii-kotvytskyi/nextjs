import "@/styles/global.css";
import type { Metadata } from "next";
import cx from "classnames";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dog app",
  description: "Dog owners helper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.className
          // "flex h-screen w-[100%] max-w-[100vw] p-10"
        )}
      >
        {children}
      </body>
    </html>
  );
}
