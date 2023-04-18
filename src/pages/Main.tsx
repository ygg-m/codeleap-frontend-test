import { Provider, useSelector } from "react-redux";
import { CreatePost } from "../components/EditPost";
import { Header } from "../components/Header";
import { PostList } from "../components/PostList";
import { useGetListQuery } from "../redux/apiSlice";
import { UserState } from "../redux/userSlice";

export const Main = () => {
  const { data, error, isLoading } = useGetListQuery("");
  const user = useSelector((state: { user: UserState }) => state.user.user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Uh-oh, there was an error.</div>;
  }

  if (data)
    return (
      <section className="w-screen min-h-screen grid place-items-center p-8">
        <div className="bg-base-100 min-h-full max-w-2xl w-[90vw] flex flex-col gap-4 rounded-lg overflow-hidden shadow-lg pb-4">
          <Header user={user} />
          <CreatePost />
          <div className="divider m-0" />
          <PostList posts={data.results} />
        </div>
      </section>
    );
  else return <></>;
};
