// ArticlePage.jsx
import React, { useState, useEffect } from "react";

// Helper function to calculate estimated reading time
const calculateReadingTime = (text) => {
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = text.split(/\s+/).length; // Count words in the text
  const minutes = Math.ceil(wordCount / wordsPerMinute); // Calculate reading time in minutes
  return minutes;
};

const ArticlePage = () => {
  // Sample content for reading time calculation
  const articleContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod nisi vitae purus tincidunt, 
    non dictum nulla tincidunt. Nam ac quam risus. Nullam hendrerit convallis est at fringilla. Aliquam erat 
    volutpat. Integer sollicitudin tristique dui, ac sollicitudin eros tempor sed.

    Cras condimentum purus sit amet neque tincidunt, at semper odio volutpat. Morbi malesuada, ante ac tempus 
    tempus, felis velit tincidunt odio, sit amet dignissim sapien urna ac eros. Vestibulum ante ipsum primis in 
    faucibus orci luctus et ultrices posuere cubilia curae; Sed tristique magna vel feugiat vehicula. Curabitur 
    eu felis varius, fermentum velit a, scelerisque odio.

    Sed consequat ipsum vitae malesuada dignissim. Proin ullamcorper magna ac dui sollicitudin, ut aliquet lorem 
    dignissim. Integer in neque id eros venenatis aliquet. Nulla facilisi. Integer fermentum, risus vel placerat 
    tincidunt, eros arcu pretium orci, vitae pretium sapien nisi et nulla. Donec non tincidunt sem.
  `;

  const readingTime = calculateReadingTime(articleContent);

  // State for scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Current scroll position
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    const progress = (scrollPosition / totalHeight) * 100; // Calculate percentage
    setScrollProgress(progress); // Update the progress state
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Last edited date (you can update this with the actual last edited date)
  const lastEditedDate = new Date("2025-01-09T14:30:00"); // Example date

  // Function to format the date in a readable format
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="relative bg-n-8 rounded-[1rem] flex flex-col items-center text-white">
      {/* Vertical Scroll Progress Bar */}
      <div
        className="fixed top-14 right-0 h-full w-2 bg-purple-800 transition-all"
        style={{ height: `${scrollProgress}%` }}
      ></div>

      {/* Article Container */}
      <div className="bg-gray-800 bg-opacity-90 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl w-full p-6 sm:p-8 rounded-lg shadow-xl mt-16 ml-4">
        {/* Article Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-6">
          Welcome to the Article Page
        </h1>

        {/* Estimated Reading Time */}
        <p className="text-sm sm:text-base text-gray-400 mb-4">
          Estimated Reading Time: {readingTime} minute{readingTime > 1 ? 's' : ''}
        </p>

        {/* Article Image */}
        <img
          src="https://via.placeholder.com/800x400"
          alt="Article"
          className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg mb-6"
        />

        {/* Article Content */}
        <div className="text-base sm:text-lg text-gray-300 leading-relaxed space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            euismod nisi vitae purus tincidunt, non dictum nulla tincidunt. Nam
            ac quam risus. Nullam hendrerit convallis est at fringilla. Aliquam
            erat volutpat. Integer sollicitudin tristique dui, ac sollicitudin
            eros tempor sed.
          </p>
          <p>
            Cras condimentum purus sit amet neque tincidunt, at semper odio
            volutpat. Morbi malesuada, ante ac tempus tempus, felis velit
            tincidunt odio, sit amet dignissim sapien urna ac eros. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Sed tristique magna vel feugiat vehicula. Curabitur
            eu felis varius, fermentum velit a, scelerisque odio.
          </p>
          <p>
            Sed consequat ipsum vitae malesuada dignissim. Proin ullamcorper
            magna ac dui sollicitudin, ut aliquet lorem dignissim. Integer in
            neque id eros venenatis aliquet. Nulla facilisi. Integer fermentum,
            risus vel placerat tincidunt, eros arcu pretium orci, vitae pretium
            sapien nisi et nulla. Donec non tincidunt sem.
          </p>
          <p>
            Sed consequat ipsum vitae malesuada dignissim. Proin ullamcorper
            magna ac dui sollicitudin, ut aliquet lorem dignissim. Integer in
            neque id eros venenatis aliquet. Nulla facilisi. Integer fermentum,
            risus vel placerat tincidunt, eros arcu pretium orci, vitae pretium
            sapien nisi et nulla. Donec non tincidunt sem.
          </p>
          <p>
            Sed consequat ipsum vitae malesuada dignissim. Proin ullamcorper
            magna ac dui sollicitudin, ut aliquet lorem dignissim. Integer in
            neque id eros venenatis aliquet. Nulla facilisi. Integer fermentum,
            risus vel placerat tincidunt, eros arcu pretium orci, vitae pretium
            sapien nisi et nulla. Donec non tincidunt sem.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t pt-4 text-center">
          <p className="text-sm sm:text-base text-gray-500">
            Published on <span className="font-semibold">January 10, 2025</span>
          </p>

          {/* Last Edited Date */}
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Last edited on <span className="font-semibold">{formatDate(lastEditedDate)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
