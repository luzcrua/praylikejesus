const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container px-4 text-center">
        <p className="text-sm">
          © 2024 Ore Como Jesus. Todos os direitos reservados.
        </p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-sm text-gray-400 hover:text-gold">
            Política de Privacidade
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-gold">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;