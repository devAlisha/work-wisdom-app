import { useEffect, useState } from "react";
import Button from "../components/Button";
import { clearPostCreatedStatus, createPost } from "../features/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createPost(formData));
      toast.success("Created Post Successfully!");
    } catch (error) {
      toast.error("Failed to create post.");
    }
  };

  const { isPostCreating, isPostCreatedSuccess } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    if (isPostCreatedSuccess) {
      setFormData({ title: "", content: "" });
      dispatch(clearPostCreatedStatus());
    }
  }, [dispatch, isPostCreatedSuccess]);

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-10">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Share Your Interview Experience
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Contribute to the Community by Sharing Your Insights and Tips
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                    value={formData.title}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Write a title for your post"
                    onChange={handleChange}
                    required
                    className="block border border-1 w-full px-3 py-2 text-gray-900 bg-gray-50 rounded-md focus:ring-2 focus:ring-gray-500"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Content
                </label>
                <div className="mt-2">
                  <textarea
                    value={formData.content}
                    id="content"
                    name="content"
                    rows={6}
                    placeholder="Enter your content here"
                    onChange={handleChange}
                    required
                    className="block border border-1 w-full px-3 py-2 text-gray-900 bg-gray-50 rounded-md focus:ring-2 focus:ring-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-start gap-x-6">
          <Button
            disabled={isPostCreating}
            type="submit"
            text={isPostCreating ? "Creating" : "Save"}
          />
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => setFormData({ title: "", content: "" })}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
