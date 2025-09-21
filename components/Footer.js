function Footer() {
  try {
    return (
      <footer className="bg-gray-900 text-white py-12" data-name="footer">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img
                src="https://app.trickle.so/storage/public/images/usr_0f004a86b8000001/20b7cbab-aa6a-40f2-b6b8-e7a3d5406b19.gif"
                alt="Adiyogi IE Services Logo"
                className="h-10 mb-4"
              />
              <p className="text-gray-400">
                Leading export company specializing in high-quality products
                with worldwide shipping capabilities.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-white"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400">Export Services</span>
                </li>
                <li>
                  <span className="text-gray-400">Quality Assurance</span>
                </li>
                <li>
                  <span className="text-gray-400">Global Shipping</span>
                </li>
                <li>
                  <span className="text-gray-400">Custom Packaging</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Mumbai, Maharashtra, India</p>
                <p>+91 98765 43210</p>
                <p>info@adiyogiie.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Adiyogi IE Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error("Footer component error:", error);
    reportError(error);
    return null;
  }
}
