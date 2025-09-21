function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };

        return (
            <header className="fixed w-full top-0 z-50 bg-white shadow-md" data-name="header">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex justify-between items-center">
                        <div className="flex items-center" data-name="logo">
                            <img 
                                src="https://app.trickle.so/storage/public/images/usr_0f004a86b8000001/20b7cbab-aa6a-40f2-b6b8-e7a3d5406b19.gif" 
                                alt="Adiyogi IE Services Logo" 
                                className="h-10"
                            />
                        </div>

                        <div className="hidden md:flex space-x-8" data-name="nav-links">
                            <a href="#home" className="text-gray-700 hover:text-purple-700">Home</a>
                            <a href="#products" className="text-gray-700 hover:text-purple-700">Products</a>
                            <a href="#about" className="text-gray-700 hover:text-purple-700">About</a>
                            <a href="#contact" className="text-gray-700 hover:text-purple-700">Contact</a>
                        </div>

                        <button 
                            className="md:hidden text-gray-700"
                            onClick={toggleMenu}
                            data-name="mobile-menu-button"
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </nav>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4" data-name="mobile-menu">
                            <div className="flex flex-col space-y-4">
                                <a href="#home" className="text-gray-700 hover:text-purple-700">Home</a>
                                <a href="#products" className="text-gray-700 hover:text-purple-700">Products</a>
                                <a href="#about" className="text-gray-700 hover:text-purple-700">About</a>
                                <a href="#contact" className="text-gray-700 hover:text-purple-700">Contact</a>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
