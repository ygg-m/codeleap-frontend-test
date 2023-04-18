import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../redux/userSlice";

export const Login = () => {
  const [value, setValue] = useState<string>("");
  const UserIsEmpty = value.length <= 0;

  const dispatch = useDispatch();

  return (
    <section className="w-screen h-screen grid place-items-center">
      <article className="bg-base-100 p-4 rounded-lg shadow-lg grid gap-4 max-w-md w-[90vw]">
        <h1 className="text-lg font-bold">Welcome to CodeLeap network!</h1>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Please enter your username</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="w-full grid place-items-end">
          <Link
            to="/main"
            onClick={() => dispatch(setUser(value))}
            className={`btn ${UserIsEmpty ? "btn-disabled" : ""}`}
          >
            Enter
          </Link>
        </div>
      </article>
    </section>
  );
};
