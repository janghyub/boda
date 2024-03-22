// import Circles from '~/components/Circles';
import Header from "~/components/Header";
import Home from "~/components/Home";
import About from "~/components/About";
import History from "~/components/History";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen  max-w-[1920px] relative mx-auto">
      <Header />
      <main>
        <Home />
        <About />
        <History />
        <section>section03</section>
      </main>
    </div>
  );
}
