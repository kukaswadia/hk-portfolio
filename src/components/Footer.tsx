const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="py-8 bg-dark-bg border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Built and designed by Huda Kukaswadia.  <br /> All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;