function About() {
  try {
    return (
      <section id="about" className="section" data-name="about">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Adiyogi IE Services
              </h2>
              <p className="text-gray-600 mb-6">
                Adiyogi IE Services is a leading export company specializing in
                high-quality products sourced directly from farmers and
                manufacturers. We ensure premium quality assurance and maintain
                strict hygiene standards throughout our supply chain.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to excellence and customer satisfaction has made
                us a trusted partner for businesses worldwide. We provide
                comprehensive export solutions with reliable delivery and
                competitive pricing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-gray-600">Products Exported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://app.trickle.so/storage/public/images/usr_0f004a86b8000001/7d623958-dbb2-42f1-8781-a5e8946c6bdd.png"
                alt="About Our Company"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("About component error:", error);
    reportError(error);
    return null;
  }
}
