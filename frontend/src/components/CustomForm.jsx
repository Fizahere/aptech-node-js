import React, { useState } from "react";

const CustomForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const nameRegex = /^[a-zA-Z\s]+$/;

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (!nameRegex.test(value)) {
      setMessage("");
      setError("name can only contain letters.");
    } else {
      setError("");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error || !name) {
      setMessage("");
      setError("name is not valid.");
      return;
    }

    if (!image) {
      setMessage("");
      setError("upload image first.");
      return;
    }
    setMessage("form submitted.");
    setTimeout(() => {
      setMessage("");
    },2000);
    setName("");
    setError("");
    setImagePreview("");
    setImage("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-full max-w-lg bg-white p-8 shadow-md rounded"
        onSubmit={handleSubmit}
        encType="multipart/formdata"
      >
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              error ? "border-red-500" : ""
            }`}
            placeholder="name**"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded cursor-pointer focus:outline-none"
          />
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Selected"
                className="max-w-xs rounded"
              />
            </div>
          )}
        </div>
        <div className="mb-4">
          {error && <p className="text-red-500 text-xs">{error}</p>}
          {message && <p className="text-green-500 text-xs">{message}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-pink-400 hover:bg-pink-500 text-white font-bold w-full py-2 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomForm;
