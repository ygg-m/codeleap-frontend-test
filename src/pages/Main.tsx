import { CreatePost } from "../components/EditPost";
import { Header } from "../components/Header";
import { PostList } from "../components/PostList";

export const Main = () => {
  return (
    <section className="w-screen min-h-screen grid place-items-center p-8">
      <div className="bg-base-100 min-h-full max-w-2xl w-[90vw] flex flex-col gap-4 rounded-lg overflow-hidden shadow-lg pb-4">
        <Header />
        <CreatePost />
        <div className="divider m-0" />
        <PostList />
      </div>
    </section>
  );
};
