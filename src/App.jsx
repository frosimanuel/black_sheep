import { initSatellite, setDoc } from '@junobuild/core';
import { useEffect } from 'react';
import { Auth } from './components/Auth';
import { Background } from './components/Background';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { Table } from './components/Table';
import Generate from './components/Generate';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    (async () =>
      await initSatellite({
        workers: {
          auth: true
        }
      }))();
  }, []);

  return (
    <div className="bg-black text-gray-100 min-h-screen">
      <header>
        <nav className="bg-gray-900 border-b border-green-800 shadow-lg">
          <div className="container mx-auto flex items-center py-1 px-7">
            <div className="flex-grow">
              <a href="#" className="flex items-center">
                <div className="w-64 h-24 ">
                  <img
                    src="/images/blacksheep/logo_texto_bs.png"
                    alt="BLACK SHEEPS"
                    className="w-full h-full object-cover object-center transform scale-150"
                  />
                </div>
              </a>
            </div>
            <div className="flex items-center">
              <button className="navbar-toggler text-green-300 hover:text-green-200 transition-colors duration-300" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Auth>
                <Table />
                <Modal />
              </Auth>
            </div>
          </div>
        </nav>
      </header>
      <main className="text-center py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold pb-8 text-center mb-8 pixel-text">ARE YOU ONE OF US?</h1>
          <div className="flex justify-center mb-8">

            <img
              src="/images/blacksheep/animacion_logo.gif"
              alt="Animated Black Sheep Logo"
            />
          </div>
          <Generate />
        </div>
      </main>

      <section className="py-16 bg-gray-900 border-t border-green-800" id="about_us">

        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold pb-8 mb-12 border-b-2 border-green-700 text-green-300 inline-block">About Us</h2>
          <div className="flex flex-col md:flex-row items-center mt-8 space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/4">
              <h3 className="text-3xl font-bold bg-green-800 text-green-200 rounded-full py-4 px-8 shadow-lg">Black Sheep</h3>
            </div>
            <div className="md:w-3/4 text-left">
              <p className="text-xl text-gray-100 leading-relaxed">Black Sheep is a collection of ∞ unique NFTs on the ICP blockchain. Each NFT represents a unique sheep with a unique set of attributes.</p>
              <p className="text-xl text-green-300 mt-6 font-semibold">Be unique, be a Black Sheep.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact_us" className="text-center bg-black py-12">
        <div className="container mx-auto px-4">
          <p className="text-xl mb-8">Follow us on
            <a href="^1^" className="text-green-300 hover:text-green-200 transition-colors duration-300 mx-2 underline">Twitter</a>
            and
            <a href="^2^" className="text-green-300 hover:text-green-200 transition-colors duration-300 mx-2 underline">Discord</a>
            for updates and giveaways.
          </p>
          <p className="text-sm text-white mt-8">© 2024 Black Sheep. Created with love, by real sheeps for real friends. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
