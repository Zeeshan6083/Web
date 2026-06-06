import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Welcome to Home Page</h1>
          <hr />
          <p className="text-center">
            We have wide range of Clothings and Accessories for you. Please check out our products and enjoy shopping with us.
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={() => navigate("/product")}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;