import React, { useState } from "react";
import ReactQuill from "react-quill"; // For the rich text editor
import "react-quill/dist/quill.snow.css"; // Styling for Quill
import Select from "react-select";
import Button from "./components/Button";

const ArticleCreation = () => {
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState(null);
    const [tags, setTags] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);
    const [previewMode, setPreviewMode] = useState(false);

    const categories = [
        { value: "technology", label: "Technology" },
        { value: "health", label: "Health" },
        { value: "finance", label: "Finance" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if all required fields are filled
        if (!title || !excerpt || !content || !category) {
            alert("Please fill in all required fields!");
            return;
        }

        // For now, just show the alert box
        alert("Your article has been published!");

        // Clear form fields after successful submission (Optional)
        setTitle("");
        setExcerpt("");
        setContent("");
        setCategory(null);
        setTags([]);
        setThumbnail(null);
    };

    return (
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
            <h1 className="h2 mb-8 mt-5 font-semibold">Create New Article</h1>
            {!previewMode ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title */}
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />

                    {/* Excerpt */}
                    <textarea
                        placeholder="Excerpt"
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className="w-full p-2 border rounded"
                        rows={3}
                        required
                    ></textarea>

                    {/* Rich Text Editor */}
                    <div className="h-64 border rounded">
                        <ReactQuill
                            value={content}
                            onChange={setContent}
                            className="h-64"
                        />
                    </div>

                    {/* Category Selection */}
                    <Select
                        options={categories}
                        value={category}
                        onChange={setCategory}
                        placeholder="Select Category"
                        className="react-select-container"
                        classNamePrefix="react-select"
                        styles={{
                            control: (base) => ({
                                ...base,
                                backgroundColor: "#1e1e2f",
                                color: "#f0f0f0",
                                borderColor: "#444",
                                borderRadius: "8px",
                            }),
                            menu: (base) => ({
                                ...base,
                                backgroundColor: "#2c2c3a",
                                color: "#f0f0f0",
                            }),
                            option: (base, state) => ({
                                ...base,
                                backgroundColor: state.isFocused ? "#444" : "#2c2c3a",
                                color: "#f0f0f0",
                                "&:hover": {
                                    backgroundColor: "#555",
                                },
                            }),
                            singleValue: (base) => ({
                                ...base,
                                color: "#f0f0f0",
                            }),
                            placeholder: (base) => ({
                                ...base,
                                color: "#aaa",
                            }),
                        }}
                    />

                    {/* Tags */}
                    <input
                        type="text"
                        placeholder="Tags (comma-separated)"
                        value={tags}
                        onChange={(e) => setTags(e.target.value.split(","))}
                        className="w-full p-2 border rounded"
                    />

                    {/* Thumbnail */}
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-gray-300">
                            Upload Thumbnail:
                        </label>
                        <input
                            type="file"
                            onChange={(e) => setThumbnail(e.target.files[0])}
                            className="block mt-0 file:bg-gray-700 file:text-gray-300 file:py-1 file:px-4 file:rounded-lg file:border-0 file:cursor-pointer"
                        />
                    </div>

                    <div className="flex justify-center items-center gap-4 mt-8">
                        {/* Preview Toggle */}
                        <Button white>
                            <button
                                type="button"
                                onClick={() => setPreviewMode(true)}
                                className="text-black"
                            >
                                Preview
                            </button>
                        </Button>

                        {/* Submit Button */}
                        <Button>
                            <button type="submit" className="text-white">
                                Publish Article
                            </button>
                        </Button>
                    </div>
                </form>
            ) : (
                <div className="preview">
                    <Button white>
                        <button
                            onClick={() => setPreviewMode(false)}
                            className="text-black"
                        >
                            Back to Edit
                        </button>
                    </Button>
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="italic text-gray-500">{excerpt}</p>
                    <div
                        dangerouslySetInnerHTML={{ __html: content }}
                        className="prose"
                    ></div>
                    {thumbnail && <img src={URL.createObjectURL(thumbnail)} alt="Preview" />}
                </div>
            )}
        </div>
    );
};

export default ArticleCreation;
