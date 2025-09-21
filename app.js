class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error boundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="text-center p-8">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h1>
                        <p className="text-gray-600 mb-4">Please refresh the page or try again later.</p>
                        <button 
                            onClick={() => window.location.reload()} 
                            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

function App() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [loadingError, setLoadingError] = React.useState(null);

    React.useEffect(() => {
        try {
            // Check if all required components are available
            const requiredComponents = [
                typeof Header, typeof Hero, typeof Services, 
                typeof Products, typeof About, typeof Testimonials, 
                typeof Contact, typeof Footer
            ];
            
            const allLoaded = requiredComponents.every(comp => comp === 'function');
            
            if (allLoaded) {
                setIsLoading(false);
            } else {
                throw new Error('Components not loaded properly');
            }
        } catch (error) {
            console.error('Loading error:', error);
            setLoadingError(error.message);
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    if (loadingError) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Loading Error</h1>
                    <p className="text-gray-600 mb-4">{loadingError}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen" data-name="app">
            <Header />
            <main id="home">
                <Hero />
                <Services />
                <Products />
                <About />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

// Initialize app when page loads
window.addEventListener('load', () => {
    try {
        console.log('Initializing React app...');
        const rootElement = document.getElementById('root');
        
        if (!rootElement) {
            throw new Error('Root element not found');
        }

        const root = ReactDOM.createRoot(rootElement);
        root.render(
            React.createElement(ErrorBoundary, null,
                React.createElement(App, null)
            )
        );
        
        console.log('React app initialized successfully');
    } catch (error) {
        console.error('Failed to initialize app:', error);
        document.getElementById('root').innerHTML = `
            <div style="padding: 2rem; text-align: center; color: #ef4444;">
                <h1>Application Error</h1>
                <p>Failed to load the application. Please check the console for details.</p>
                <button onclick="window.location.reload()" style="padding: 0.5rem 1rem; background: #7c3aed; color: white; border: none; border-radius: 0.25rem; cursor: pointer;">
                    Refresh Page
                </button>
            </div>
        `;
    }
});
