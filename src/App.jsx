import Header from './components/Header';
import Footer from './components/Footer';
import pantanal from './assets/pantanal.jpg';

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center bg-primaryColors-300 h-screen">
        <img
          src={pantanal}
          alt="árvores vistas de um local alto indicando a aparência do pantanal"
          className="w-screen h-[40vh] object-cover mt-16"
        />
        <div className="mx-6 mt-6 mb-12 text-center">
          <h1 className="text-4xl font-bold text-brandGreen mb-6">
            Pequeno em território, gigante em natureza
          </h1>
          <p className="text-lg">
            O Pantanal, apesar de ser o menor bioma do Brasil, traz uma
            riquíssima fauna e flora
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
