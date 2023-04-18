// import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
import { getSocialMediaTimestamp } from "../actions/getTimestamp";
import { DeleteIcon, EditIcon } from "../assets/ui/index";
import { UserState } from "../redux/userSlice";
import { Post as PostProps } from "../types/postsSlice";
import { Modal } from "./Modal";

interface TreatedPostProps {
  ID: number;
  Title: string;
  Content: string;
  Author: string;
  Date: Date;
  UserIsAuthor: boolean;
}

const ShowTitle = ({
  id,
  Title,
  Edit,
}: {
  id: number;
  Title: string;
  Edit: boolean;
}) => {
  return (
    <header className="px-4 bg-primary rounded-t-lg flex items-center justify-between text-base-100">
      <h1 className="text-lg font-bold py-4">{Title}</h1>
      {Edit ? <ShowEditButtons id={id} /> : null}
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

const DeleteButton = ({ id }: { id: number }) => (
  <div>
    <label htmlFor="delete-modal" className="btn btn-outline btn-error">
      <DeleteIcon className="w-6 h-6" />
    </label>

    <input type="checkbox" id="delete-modal" className="modal-toggle" />
    <div className="modal text-base-content">
      <Modal deletePost id={id} />
    </div>
  </div>
);

const EditButton = ({ id }: { id: number }) => (
  <div>
    <label htmlFor="edit-modal" className="btn btn-outline btn-info">
      <EditIcon className="w-6 h-6" />
    </label>

    <input type="checkbox" id="edit-modal" className="modal-toggle" />
    <div className="modal text-base-content">
      <Modal id={id} />
    </div>
  </div>
);

const ShowEditButtons = ({ id }: { id: number }) => {
  return (
    <div className="flex gap-2 items-center py-2">
      <DeleteButton id={id} />
      <EditButton id={id} />
    </div>
  );
};

const Post = ({
  ID,
  Title,
  Content,
  Author,
  Date,
  UserIsAuthor,
}: TreatedPostProps) => {
  return (
    <article className="rounded-lg bg-base-200 border border-primary">
      <ShowTitle id={ID} Title={Title} Edit={UserIsAuthor} />

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
  const user = useSelector((state: { user: UserState }) => state.user.user);

  return (
    <section className="px-4 grid gap-4">
      {posts.map((post) => {
        const { id, title, content, created_datetime, username } = post;
        const isUserAuthor = username === user;
        return (
          <Post
            key={id}
            ID={id}
            Title={title}
            Content={content}
            Author={username}
            Date={new Date(Date.parse(created_datetime))}
            UserIsAuthor={isUserAuthor}
          />
        );
      })}
    </section>
  );
};
