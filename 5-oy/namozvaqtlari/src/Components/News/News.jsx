import React from "react";
import API_PATH from "../../Api/Api";

const News = ({ data, setData }) => {
  React.useEffect(() => {
    const getNews = async () => {
      try {
        const res = await fetch(API_PATH);
        const dataa = await res.json();

        // console.log(dataa);

        setData(dataa.articles);
      } catch (error) {
        console.error(error);
      }
    };

    getNews();
  }, []);
  return <>
    {data.length > 0 && data.map((news) =>
      <div>{news.title}</div>)}
    
  </>;
};

export default News;
