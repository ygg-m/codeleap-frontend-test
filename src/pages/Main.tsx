import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { CreatePost } from "../components/EditPost";
import { Header } from "../components/Header";
import { PostList } from "../components/PostList";
import { useGetListQuery } from "../redux/apiSlice";
import { UserState } from "../redux/userSlice";

export const Main = () => {
  const [offset, setOffset] = useState(0);
  const { data, error, isLoading } = useGetListQuery({
    limit: 10,
    offset: offset,
  });
  const user = useSelector((state: { user: UserState }) => state.user.user);

  let page = offset / 10;

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + 10);
  };

  const handleLoadLess = () => {
    setOffset((prevOffset) => prevOffset - 10);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Uh-oh, there was an error.</div>;
  }

  if (user === "") return <Navigate to="../login" />;

  if (data) {
    return (
      <section className="w-screen min-h-screen grid place-items-center p-8">
        <div className="bg-base-100 min-h-full max-w-2xl w-[90vw] flex flex-col gap-4 rounded-lg overflow-hidden shadow-lg pb-4">
          <Header user={user} />
          <CreatePost />
          <div className="divider m-0" />
          <PostList posts={data.results} />

          <div className="btn-group w-full grid place-items-center gap-2">
            <span>Page {page}</span>
            <div className="btn-group grid grid-cols-2">
              <button
                className={`btn btn-outline ${
                  offset < 10 ? "btn-disabled" : ""
                }`}
                onClick={handleLoadLess}
              >
                Previous page
              </button>
              <button className="btn btn-outline" onClick={handleLoadMore}>
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else return <></>;
};
