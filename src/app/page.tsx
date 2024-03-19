// import Circles from '~/components/Circles';
import Header from '~/components/Header';
import Home from '~/components/Home';
import About from '~/components/About';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen  max-w-[1920px] relative mx-auto">
            <Header />
            <main>
                <Home />
                <About />
                <section>section03</section>
            </main>
        </div>
    );
}
