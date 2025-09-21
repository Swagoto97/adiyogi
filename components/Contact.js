function Contact() {
  try {
    return (
      <section id="contact" className="section" data-name="contact">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-purple-600 w-6"></i>
                  <span className="ml-3">info@adiyogiie.com</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-purple-600 w-6"></i>
                  <span className="ml-3">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-purple-600 w-6"></i>
                  <span className="ml-3">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Contact component error:", error);
    reportError(error);
    return null;
  }
}
