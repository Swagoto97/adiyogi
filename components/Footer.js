function Footer() {
    try {
        return (
            <footer className="bg-gray-900 text-white pt-12 pb-8" data-name="footer">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="space-y-4" data-name="footer-about">
                            <img 
                                src="https://app.trickle.so/storage/public/images/usr_0f004a86b8000001/20b7cbab-aa6a-40f2-b6b8-e7a3d5406b19.gif" 
                                alt="Adiyogi IE Services Official Logo" 
                                className="h-16"
                            />
                            <p className="text-gray-400">
                                Your trusted partner in international trade, delivering excellence worldwide.
                            </p>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/abir.mondal2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/abir-mondal-6465293b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://wa.link/l1h94o" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>

                        <div data-name="footer-overview">
                            <h4 className="text-lg font-semibold mb-4">Overview</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Foreign Trade Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Export Incentive Schemes</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">RoDTEP</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">EPCG</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">GST Refunds</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Export Documentation</a></li>
                            </ul>
                        </div>

                        <div data-name="footer-industries">
                            <h4 className="text-lg font-semibold mb-4">Industries We Cater</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Agriculture & Organic</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Herbal & Spices</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Textiles & Leather</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Surgical & Pharma</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Electronics</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Optical Lens</a></li>
                            </ul>
                        </div>

                        <div data-name="footer-contact">
                            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <i className="fas fa-phone text-purple-400 w-6"></i>
                                    <span>+91 9038737330</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-envelope text-purple-400 w-6"></i>
                                    <span>abir@adiyogiexport.com</span>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-map-marker-alt text-purple-400 w-6 mt-1"></i>
                                    <span className="flex-1">
                                        5/25, Shastriji Colony,<br />
                                        Dakhindari Rd, Lake Town,<br />
                                        Kolkata, West Bengal,<br />
                                        India, 700048
                                    </span>
                                </div>
                                <a href="https://wa.link/l1h94o" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                                    <i className="fab fa-whatsapp mr-2"></i>
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center" data-name="footer-copyright">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} Adiyogi IE Services. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
