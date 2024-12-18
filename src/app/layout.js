import Layout from "@/component/cursor";
import "./globals.css";

export const metadata = {
  title: "Srijan.js - A Frontend Developer",
  description: "Generated by a web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
