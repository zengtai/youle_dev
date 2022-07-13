import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ navItems, children }) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar items={navItems} />
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
