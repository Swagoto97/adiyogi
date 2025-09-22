function App() {
  try {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      // Simulate checking if all components are loaded
      setIsLoading(false);
    }, []);

    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      );
    }

    return (
      <div className="min-h-screen" data-name="app">
        <Header />
        <main>
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
  } catch (error) {
    console.error("App component error:", error);
    reportError(error);
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>Something went wrong. Please try again later.</p>
      </div>
    );
  }
}

// Wait for DOM to be ready
$(document).ready(function () {
  try {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Application initialization error:", error);
    reportError(error);
  }
});
