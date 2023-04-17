import { DeleteIcon, EditIcon } from "../assets/ui/index";

interface PostProps {
  Title: string;
  Content: string;
  Author: string;
  Date: string;
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

const ShowDate = ({ Date }: { Date: string }) => {
  return <span className="font-bold">{Date}</span>;
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

const Post = ({ Title, Content, Author, Date, UserIsAuthor }: PostProps) => {
  return (
    <article className="rounded-lg bg-base-200">
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

export const PostList = () => {
  return (
    <section className="px-4 grid gap-4">
      <Post
        Title={"My First Post at CodeLeap Network!"}
        Content={
          "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat."
        }
        Author={"Victor"}
        Date={"25 minutes ago"}
        UserIsAuthor={false}
      />
      <Post
        Title={"Another Post!"}
        Content={
          "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat."
        }
        Author={"Ygg"}
        Date={"30 minutes ago"}
        UserIsAuthor={true}
      />
    </section>
  );
};
