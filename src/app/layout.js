import "./globals.css";
import Header from "@/components/Header";



export const metadata = {
  title: "NileAgency",
  description: "Created by devhan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased  bg-black`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
