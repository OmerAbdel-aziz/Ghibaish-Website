import { useState, useEffect } from "react";
import Postcard from "./sub-components/PostCard";
import { supabase } from "../../utils/supabase";

const News = ({ isHome = false }) => {
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
    <div
      className="flex w-full flex-col px-4 md:px-10 relative top-[555px] bg-white"
      id="news"
    >
      <div className="border-b  border-[#1E1E1E]/20 bg-white mx-auto max-w-[95%]">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center md:justify-between justify-center w-full">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Our Latest News
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                  Learn how to grow your business with our expert advice.
                </p>
              </div>
              <a
                href="/english/all-news"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                See All News
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
      </div>
    </div>
  );
};

export default News;
