import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import Header from "../components/sub-components/Header";

const ArabicSingleNewsPage = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from("ArabicNews")
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

  if (error) {
    return <p>{error}</p>; // Display error message if any
  }

  if (!newsData) {
    return <p>Loading...</p>; // Show loading state while fetching
  }

  return (
    <>
      <Header title={newsData.title} />
      <div className="  py-10 px-10 md:px-20 relative  bg-white pb-20">
        {newsData && (
          <div
            className="flex flex-col items-center justify-center gap-10 "
            lang="ar"
          >
            <p className="text-lل text-center">{newsData.content}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ArabicSingleNewsPage;
