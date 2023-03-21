import React from "react";
import News from "./Components/News/News";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [data, setData] = React.useState([]);
  return (
    <>
       
          <News data={data} setData={setData} />
    </>
  );
}

export default App;
