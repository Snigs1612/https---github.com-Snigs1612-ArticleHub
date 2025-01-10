import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from './components/Hero';
import ArticleList from './components/ArticleList';
import ArticlePage from './ArticlePage';
import { data } from './data';
import WriteArticle from "./WriteArticle";
import BookmarkList from "./components/BookmarkList";
import About from "./components/About";

const App = () => {
  console.log(data);
  return (
    <Router>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <ArticleList />
              </>
            }
          />

          {/* Article Page */}
          <Route path="/article/:id" element={<ArticlePage />} />

          {/* Write Article Page */}
          <Route path="/write-article" element={<WriteArticle />} />

          {/* View Article List */}
          <Route path="/article-list" element={<ArticleList />} />

          <Route path="/bookmarks" element={<BookmarkList />} />
        </Routes>
        <ButtonGradient />
      </div>
    </Router>
  );
};

export default App;
