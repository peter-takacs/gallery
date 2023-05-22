import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Michelle Dee Kalman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routes = [
    { href: "vizdev", name: "Visual development" },
    //TODO { href: "illustration", name: "Illustration" },
    { href: "about", name: "About" },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="header">
          <ul>
            <li className="large-heading">
              <h1>Michelle Kalman</h1>
            </li>
            <li className="small-heading">
              <h1>MK</h1>
            </li>
            {routes.map(({ href, name }) => (
              <li key={href}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="content">{children}</section>
      </body>
    </html>
  );
}
