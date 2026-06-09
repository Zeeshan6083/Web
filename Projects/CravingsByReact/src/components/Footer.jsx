import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#111827] pt-5 pb-3 text-light text-white">
      <div className="container mx-auto px-4">
        <p className="mb-4 text-center text-sm">
          Your favorite food delivery platform connecting customers with
          restaurants and riders.
        </p>

        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-5 md:text-left">
          <div className="flex justify-center md:justify-start">
            <img
              src="http://cravings.ricr.in/assets/circleLogo-DpCri5UD.png"
              alt="Cravings Logo"
              className="rounded-full"
              width="110"
            />
          </div>

          <div>
            <h6 className="mb-3 font-semibold">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white no-underline hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white no-underline hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-white no-underline hover:underline">
                  Order Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-3 font-semibold">For Restaurants</h6>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/partner"
                  className="text-white no-underline hover:underline"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/restaurant-dashboard"
                  className="text-white no-underline hover:underline"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-3 font-semibold">For Riders</h6>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/become-rider"
                  className="text-white no-underline hover:underline"
                >
                  Become a Rider
                </Link>
              </li>
              <li>
                <Link
                  to="/rider-dashboard"
                  className="text-white no-underline hover:underline"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-3 font-semibold">Support</h6>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/feedback"
                  className="text-white no-underline hover:underline"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-white no-underline hover:underline">
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white no-underline hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-white/30" />

        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm md:flex-row">
          <p className="m-0">©️ 2026 Cravings. All Rights Reserved.</p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/privacy-policy" className="text-white no-underline hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white no-underline hover:underline">
              Terms & Conditions
            </Link>
            <Link to="/sitemap" className="text-white no-underline hover:underline">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;