import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { data } from "../data";
import { useState, useEffect } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import Toast from "./ToastNotification";

const ArticleCard = () => {
  const [visibleArticles, setVisibleArticles] = useState(6); // State to manage visible articles
  const [search, setSearch] = useState(""); // State to manage search input
  const [sort, setSort] = useState("date"); // State to manage selected sorting option
  const [bookmarks, setBookmarks] = useState([]); // State to manage bookmarked articles
  const [toastMessage, setToastMessage] = useState(""); // State for toast notifications

  // Load bookmarks from localStorage on component mount
  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  // Save bookmarks to localStorage
  const updateLocalStorage = (updatedBookmarks) => {
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  const handleShowMore = () => {
    setVisibleArticles(data.length); // Show all articles
  };

  const toggleBookmark = (article) => {
    const isBookmarked = bookmarks.some((bookmark) => bookmark.id === article.id);
    let updatedBookmarks;

    if (isBookmarked) {
      // Remove from bookmarks
      updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== article.id);
    } else {
      // Add to bookmarks
      updatedBookmarks = [...bookmarks, article];
    }

    setBookmarks(updatedBookmarks);
    updateLocalStorage(updatedBookmarks);
  };

  // Copy link to clipboard
  const handleCopyLink = (articleUrl) => {
    navigator.clipboard.writeText(articleUrl)
      .then(() => {
        setToastMessage("Link copied to clipboard!");
      })
      .catch(() => {
        setToastMessage("Failed to copy link.");
      });
  };

  return (
    <Section crosses id="view-articles">
      <div className="container relative z-2">
        {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage("")} />}
        <Heading
          className="md:max-w-md lg:max-w-2xl font-bold"
          title="Discover the World, One Read at a Time"
        />
        <div className="flex justify-between items-center mt-8 mb-10 space-x-4">
          {/* Search Bar */}
          <div className="w-full md:w-3/4">
            <input
              type="text"
              placeholder="Search articles by category..."
              className="w-full px-4 py-2 mb-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Sort Options Dropdown */}
          <div className="w-1/4">
            <select
              className="w-full px-4 py-2 mb-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="date">Sort by Date</option>
              <option value="read_time">Sort by Read Time</option>
              <option value="popularity">Sort by Popularity</option>
              <option value="last_edited">Sort by Last Edited</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.filter((item) => {
            return search.toLowerCase() === "" ? true : item.category.toLowerCase().includes(search.toLowerCase());
          })
            .slice(0, visibleArticles)
            .map((item) => {
              const isBookmarked = bookmarks.some((bookmark) => bookmark.id === item.id);

              return (
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
                    <p><strong>Author:</strong> {item.author_name}</p>
                    <p><strong>Publish Date:</strong> {item.publish_date}</p>
                    <p><strong>Category:</strong> {item.category}</p>
                  </div>

                  <div className="flex items-center gap-2">
  {/* Bookmark Button */}
<button
  onClick={() => toggleBookmark(item)}
  className="p-0 bg-transparent border-none"
>
  <img
    src={isBookmarked ? "./src/assets/white-bookmark.svg" : "./src/assets/bookmark.svg"}
    alt={isBookmarked ? "Remove Bookmark" : "Add to Bookmarks"}
    className="w-6 h-6 transition-colors"
  />
</button>

  {/* Copy Link Button */}
  <button
    onClick={() => handleCopyLink(`/article/${item.id}`)}
    className="p-0 bg-transparent border-none"
  >
    <img
      src="./src/assets/link-intact.svg"
      alt="Copy Link"
      className="w-6 h-6 text-white transition-colors"
    />
  </button>
</div>



                  {/* "Explore More" Section */}
                  <div className="flex justify-center items-center mt-auto">
                    <Link
                      to={`/article/${item.id}`}
                      className="flex items-center space-x-2"
                    >
                      <p className="font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                        Explore more
                      </p>
                      <Arrow />
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Show More Button */}
        {visibleArticles < data.length && (
          <div className="text-center mt-8">
            <Button white>
              <button
                className="text-black"
                onClick={handleShowMore}
              >
                Show More
              </button>
            </Button>
          </div>
        )}

        {/* Link to View Bookmarks */}
        <div className="text-center mt-8">
          <Link to="/bookmarks" className="text-white font-bold">
            View Bookmarks
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default ArticleCard;
