import { useState } from "react";

const CallToAction = ({ str }: { str: string }) => {
  return <h1 className="text-xl font-bold">{str}</h1>;
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
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const isTitleOrContentEmpty = title.length > 0 && content.length > 0;

  return (
    <section className="modal-box p-4 w-full grid gap-2">
      <CallToAction str="Editing Post" />
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          placeholder="Hello World!"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      <div className="flex gap-4 w-full justify-end mt-4">
        <label htmlFor="edit-modal" className={"btn btn-outline btn-error"}>
          Cancel
        </label>
        <label
          htmlFor="edit-modal"
          className={`btn btn-primary ${
            isTitleOrContentEmpty ? "" : "btn-disabled"
          }`}
        >
          Confirm
        </label>
      </div>
    </section>
  );
};

export const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const isTitleOrContentEmpty = title.length > 0 && content.length > 0;

  return (
    <section className="px-4 w-full grid gap-2">
      <CallToAction str="What's on your mind?" />
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          placeholder="Hello World!"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      <div className="grid place-items-end">
        <button
          className={`btn px-8 ${isTitleOrContentEmpty ? "" : "btn-disabled"}`}
        >
          Create
        </button>
      </div>
    </section>
  );
};
