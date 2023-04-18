import {  useDeletePostMutation } from "../redux/apiSlice";
import { Post } from "../types/postsSlice";
import { EditPost } from "./EditPost";

const DeletePost = ({ id }: { id: number }) => {
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();

  return (
    <div className="modal-box grid place-items-center gap-8">
      <h3 className="font-bold text-xl">
        Are you sure you want to delete this item?
      </h3>
      <div className="flex gap-4">
        <label htmlFor="delete-modal" className="btn btn-outline btn-primary">
          Cancel
        </label>
        <label
          htmlFor="delete-modal"
          className="btn btn-error"
          onClick={() => {
            deletePost(id);
          }}
        >
          Delete
        </label>
      </div>
    </div>
  );
};

const Edit = ({ data }: { data: Post }) => {
  return <EditPost data={data} />;
};

export const Modal = ({
  deletePost,
  data,
}: {
  deletePost?: boolean;
  data: Post;
}) => {
  return deletePost ? <DeletePost id={data.id} /> : <Edit data={data} />;
};
