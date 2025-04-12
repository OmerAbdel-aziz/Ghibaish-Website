import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase";
import Postcard from "../components/sub-components/PostCard";
import EnglishHeader from "../components/sub-components/EnglishHeader";
const AllNewsPage = ({ isHome = false }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from("News")
          .select()
          .limit(isHome ? 3 : undefined);

        if (error) {
          throw new Error(error.message);
        }

        setPosts(data);
      } catch (error) {
        setError("Could not fetch news: " + error.message);
        setPosts([]);
        console.error(error);
      }
    };

    fetchNews();
  }, []);
  return (
    <div className=" ">
      <EnglishHeader title="News" />
      <div className="mx-10 my-10 md:my-0 ">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 relative ">
          {error && <p>{error}</p>}
          {posts.length > 0 ? (
            posts.map((post) => (
              <Postcard
                key={post.id}
                id={post.id}
                title={post.title}
                content={
                  post.content.length > 100
                    ? post.content.substring(0, 150) + "..."
                    : post.content
                }
                imageUrl={post.image_url}
              />
            ))
          ) : (
            <p>No news available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllNewsPage;
