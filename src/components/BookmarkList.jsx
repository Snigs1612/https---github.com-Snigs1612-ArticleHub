import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/svg/Arrow";
import Button from "./Button";

const BookmarkList = () => {
  const [bookmarks, setBookmarks] = useState([]);

  // Load bookmarks from localStorage
  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  // Handle removal of bookmark
  const handleRemoveBookmark = (id) => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="container relative z-2 mt-8">
      <h2 className="text-2xl font-bold mb-8">Your Bookmarks</h2>

      {bookmarks.length === 0 ? (
        <p>No bookmarks added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookmarks.map((item) => (
            <div
              className="relative z-2 flex flex-col min-h-[25rem] p-[2.4rem] border rounded-lg shadow-md"
              key={item.id}
            >
              {/* Article Title */}
              <h5 className="h5 mb-5">{item.article_title}</h5>

              {/* Article Body Preview */}
              <p className="body-2 mb-4 text-n-3">
                {item.article_body.slice(0, 150)}... {/* Trimmed for preview */}
              </p>

              {/* Additional Article Information */}
              <div className="text-sm text-n-5 mb-6">
                <p>
                  <strong>Author:</strong> {item.author_name}
                </p>
                <p>
                  <strong>Publish Date:</strong> {item.publish_date}
                </p>
                <p>
                  <strong>Category:</strong> {item.category}
                </p>
              </div>

              {/* Remove Bookmark Button */}
              <button
                onClick={() => handleRemoveBookmark(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Remove Bookmark
              </button>

              {/* "Explore More" Section */}
              <div className="flex justify-center items-center mt-auto">
                <Link to={`/article/${item.id}`} className="flex items-center space-x-2">
                  <p className="font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Back Button */}
      <div className="text-center mt-8">
        <Button white>
          <Link to="/" className="text-black">
            Back to Articles
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BookmarkList;
