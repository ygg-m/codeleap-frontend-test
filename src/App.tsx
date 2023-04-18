import { useSelector } from "react-redux";
import {  useLocation } from "react-router-dom";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";

import { UserState } from "./redux/userSlice";

function App() {
  const user = useSelector((state: { user: UserState }) => state.user.user);
  const isDefault = useLocation().pathname.split("/").reverse()[0] === "";

  return (
    <div className="bg-base-300">
      {isDefault ? !user ? <Login /> : <Main /> : null}
    </div>
  );
}

export default App;
