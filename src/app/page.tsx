import Download from "./features/download/presentations/Download";
import Features from "./features/features-section/presentations/Features";
import Footer from "./features/footer/presentations/Footer";
import Hero from "./features/hero/presentations/Hero";
import Navbar from "./features/navbar/presentations/Navbar";
import Screenshots from "./features/screenshots/presentations/Screenshots";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Download />
      <Footer />
    </main>
  );
}
