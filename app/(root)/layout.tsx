import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <Hero />
      </main>
    </>
  );
};

export default Layout;
