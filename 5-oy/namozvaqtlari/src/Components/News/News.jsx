import React from "react";
import API_PATH from "../../Api/Api";
import "./News.css";

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
  return (
    <>
      {data.length > 0 &&
        data.map((news) => (
          <>
            <div class="card">
              <div class="card-header">
              <h3 className="title">{news.title.slice(0, 20)}...</h3>
            </div>
            <div class="card-body"><span>{news.publishedAt}</span></div>
              <div class="card-footer">
                <h5>{news.content.slice(0,40)}...</h5>
            </div>
          </div>
          </>
        ))}
    </>
  );
};

export default News;
