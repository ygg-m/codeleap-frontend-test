import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { UserState } from "./redux/userSlice";

function App() {
  const user = useSelector((state: { user: UserState }) => state.user.user);
  const isDefault = useLocation().pathname.split("/").reverse()[0] === "";

  if (isDefault) {
    if (!user) return <Navigate to="login" />;
    else return <Navigate to="main" />;
  }

  return (
    <div className="bg-base-300">
      <Outlet />
    </div>
  );
}

export default App;
