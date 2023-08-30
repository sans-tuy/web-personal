import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
// import Footer from "./footer";
// import Navbar from "./navbar";

export interface ThemeProps {
  theme: string;
  handleToggleTheme: () => void;
}

export default function Layout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <>
      {/* <Navbar /> */}

      <Header />
      <main className="p-8 bg-red-500">{children}</main>
      <Footer />
      {/* <Footer /> */}
    </>
  );
}
