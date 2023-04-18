import { Link } from "react-router-dom";
import { setUser } from "../redux/userSlice";

export const Header = ({ user }: { user: string }) => {
  return (
    <header className="p-4 bg-primary flex justify-between items-center">
      <h1 className="text-lg font-bold text-base-100">
        Welcome to CodeLeap Network, {user}!
      </h1>
      <Link
        to="../login"
        className="btn btn-sm gap-2"
        onClick={() => {
          setUser("");
        }}
      >
        Log Out
      </Link>
    </header>
  );
};
