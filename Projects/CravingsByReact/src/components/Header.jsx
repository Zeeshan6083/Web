import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-[#c94f14] py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* <Link to="/" className="m-0 p-0">
          <img
            src="https://cravings.ricr.in/assets/transparentLogoLight-De2Z7I01.png"
            alt="Cravings Logo"
            className="w-[100px]"
          />
        </Link> */}

        <div className="flex items-center gap-4">
          {/* <Link to="/login" className="text-white no-underline hover:opacity-80">
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-md border border-white px-4 py-2 text-white no-underline hover:bg-white hover:text-[#c94f14]"
          >
            Register
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;