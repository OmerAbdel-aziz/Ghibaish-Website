import React, { useEffect, useState } from "react";
import Postcard from "../components/sub-components/Postcard";
import { supabase } from "../../utils/supabase";

const News = ({ isHome = false }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from("ArabicNews")
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
      className="flex w-full flex-col px-4 md:px-10 relative  bg-white"
      id="news"
    >
      <div className="border-b border-[#1E1E1E]/20 bg-white mx-auto max-w-[95%] ">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col-reverse md:flex-row gap-4 items-end md:items-center md:justify-between justify-center w-full">
              <a
                href="/all-news-ar"
                className="flex-row-reverse gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1E1E1E] rounded-lg hover:bg-[#637C65] focus:ring-4 focus:outline-none focus:ring-blue-300 inline-flex relative bottom-0"
              >
                اكتشف المزيد
                <svg
                  className="rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <div className="mx-auto max-w-2xl lg:mx-0 ">
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-end">
                  اقرا اخر الاخبار
                </h2>
                <p className="mt-2 text-lg text-gray-600 text-end">
                  لا يعرض أحد لتدخل تعسفي في حياته الخاصة أو أسرته أو مسكنه أو
                  مراسلاته أو لحملات على شرفه وسمعته.
                </p>
              </div>
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
                      post.content.length > 150
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
