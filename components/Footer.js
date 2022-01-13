const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white px-20 py-4 flex justify-between items-center absolute bottom-0">
      <div>
        Made with <span className="font-sans">❤</span> by Denzil Samuel
      </div>
      <a href="https://github.com/samueldenzil">
        <i className="fab fa-github text-2xl cursor-pointer hover:text-gray-300"></i>
      </a>
    </footer>
  );
};

export default Footer;
