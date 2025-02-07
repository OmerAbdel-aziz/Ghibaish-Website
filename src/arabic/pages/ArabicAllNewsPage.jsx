import React from "react";
import Postcard from "../components/sub-components/Postcard";
import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase";
import Header from "../components/sub-components/Header";

const ArabicAllNewsPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase.from("ArabicNews").select();

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
    <div className="bg-white">
      <Header title={"اطلع على اخر الأخبار و المستجدات المتعلقة بالكلية"} />
      <div className=" px-10 md:px-20 relative top-[250px] bg-white pb-20">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                lang="ar"
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

export default ArabicAllNewsPage;
