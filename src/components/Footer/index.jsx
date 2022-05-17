import { InstagramLogo } from 'phosphor-react';

function Footer() {
  return (
    <footer className="w-full px-6 py-[64px] bg-primaryColors-500 text-white">
      <div className="lg:max-w-5xl md:max-w-4xl flex flex-col  mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">#Pantanow</h1>
        <p className="mb-3">
          ©2022{' '}
          <a
            href="https://github.com/JonathanPR0"
            className="text-primaryColor-300"
          >
            JonathanPR0
          </a>
        </p>
        <p className="mb-6">Todos os direitos reservados.</p>
        <p className="self-center text-primaryColors-300">
          <a href="https://instagram.com/" className="flex flex-row">
            <InstagramLogo size={24} className="mr-1" />
            <p className="hover:underline underline-offset-1">Instagram</p>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
