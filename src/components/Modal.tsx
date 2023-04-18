import { EditPost } from "./EditPost";

const DeletePost = ({ id }: { id: number }) => (
  <div className="modal-box grid place-items-center gap-8">
    <h3 className="font-bold text-xl">
      Are you sure you want to delete this item?
    </h3>
    <div className="flex gap-4">
      <label htmlFor="delete-modal" className="btn btn-outline btn-primary">
        Cancel
      </label>
      <label htmlFor="delete-modal" className="btn btn-error">
        Delete
      </label>
    </div>
  </div>
);

const Edit = ({ id }: { id: number }) => {
  return <EditPost />;
};

export const Modal = ({
  deletePost,
  id,
}: {
  deletePost?: boolean;
  id: number;
}) => {
  return deletePost ? <DeletePost id={id} /> : <Edit id={id} />;
};
