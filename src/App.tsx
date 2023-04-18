import { Link, Navigate, Outlet, useLocation } from "react-router-dom";

function App() {
  const isDefault = useLocation().pathname.split("/").reverse()[0] === "";

  return (
    <div className="bg-base-300">
      {isDefault ? (
        <div className="w-screen h-screen grid place-items-center">
          <Link to="login" className="btn">
            Login
          </Link>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default App;
