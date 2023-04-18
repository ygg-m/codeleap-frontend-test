// import { v4 as uuid } from "uuid";
import { getSocialMediaTimestamp } from "../actions/getTimestamp";
import { DeleteIcon, EditIcon } from "../assets/ui/index";
import { Post as PostProps } from "../types/postsSlice";

interface TreatedPostProps {
  Title: string;
  Content: string;
  Author: string;
  Date: Date;
  UserIsAuthor: boolean;
}

const ShowTitle = ({ Title, Edit }: { Title: string; Edit: boolean }) => {
  return (
    <header className="px-4 bg-primary rounded-t-lg flex items-center justify-between text-base-100">
      <h1 className="text-lg font-bold py-4">{Title}</h1>
      {Edit ? <ShowEditButtons /> : null}
    </header>
  );
};

const ShowContent = ({ Content }: { Content: string }) => {
  return <div>{Content}</div>;
};

const ShowAuthor = ({ Author }: { Author: string }) => {
  return (
    <h3>
      @<span className="font-bold">{Author}</span>
    </h3>
  );
};

const ShowDate = ({ Date }: { Date: Date }) => {
  return <span className="font-bold">{getSocialMediaTimestamp(Date)}</span>;
};

const ShowEditButtons = () => {
  return (
    <div className="flex gap-2 items-center py-2">
      <button className="btn btn-square btn-info w-fit p-2 px-3">
        <EditIcon className="w-6 h-6" />
      </button>
      <button className="btn btn-square btn-error w-fit p-2 px-3">
        <DeleteIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

const Post = ({
  Title,
  Content,
  Author,
  Date,
  UserIsAuthor,
}: TreatedPostProps) => {
  return (
    <article className="rounded-lg bg-base-200 border border-primary">
      <ShowTitle Title={Title} Edit={UserIsAuthor} />

      <div className="p-4 grid gap-4">
        <div className="flex justify-between text-neutral-content">
          <ShowAuthor Author={Author} />
          <ShowDate Date={Date} />
        </div>
        <ShowContent Content={Content} />
      </div>
    </article>
  );
};

export const PostList = ({ posts }: { posts: PostProps[] }) => {
  return (
    <section className="px-4 grid gap-4">
      {posts.map((post) => {
        const { id, title, content, created_datetime, username } = post;
        return (
          <Post
            key={id}
            Title={title}
            Content={content}
            Author={username}
            Date={new Date(Date.parse(created_datetime))}
            UserIsAuthor={false}
          />
        );
      })}
    </section>
  );
};
