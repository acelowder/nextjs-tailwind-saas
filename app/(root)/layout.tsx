import Navbar from "@/components/sections/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">{children}</main>
    </>
  );
};

export default Layout;
