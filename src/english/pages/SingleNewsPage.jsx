import { useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import { useState, useEffect } from "react";
import EnglishHeader from "../components/sub-components/EnglishHeader";

const SingleNewsPage = ({}) => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from("News")
        .select("*")
        .eq("id", id);

      if (error) {
        setError("Could not fetch news.");
        console.error(error);
      } else {
        setNewsData(data[0]); // Assuming data is an array and you want the first item
      }
    };

    fetchNews();
  }, [id]);

  return (
    <>
      <EnglishHeader title={newsData?.title} />
      <section class="bg-white  relative top-[40vh] min-h-screen">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="max-w-screen-lg text-gray-500 sm:text-lg  ">
            <p class="mb-4 font-light">{newsData?.content}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleNewsPage;
