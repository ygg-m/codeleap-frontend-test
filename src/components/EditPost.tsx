const CallToAction = () => {
  return <h1 className="text-xl font-bold">What's on your mind?</h1>;
};

const Title = ({ value }: { value?: string }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Title</span>
      </label>
      <input
        type="text"
        placeholder="Hello World!"
        value={value}
        className="input input-bordered w-full"
      />
    </div>
  );
};

const Content = ({ value }: { value?: string }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Content</span>
      </label>
      <input
        type="text"
        placeholder="Hello World!"
        value={value}
        className="input input-bordered w-full"
      />
    </div>
  );
};

const Create = () => {
  return (
    <div className="grid place-items-end">
      <button className="btn px-8">Create</button>
    </div>
  );
};

export const EditPost = () => {
  return (
    <section className="p-4 w-full grid gap-2">
      <CallToAction />
      <Title />
      <Content />
      <Create />
    </section>
  );
};

export const CreatePost = () => {
  return (
    <section className="px-4 w-full grid gap-2">
      <CallToAction />
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          placeholder="Hello World!"
          className="input input-bordered w-full"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Content</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Content"
        ></textarea>
      </div>

      <div className="grid place-items-end">
        <button className="btn px-8">Create</button>
      </div>
    </section>
  );
};
