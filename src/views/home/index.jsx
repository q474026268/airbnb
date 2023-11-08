import React, { memo, useEffect, useState } from "react";
import HTTPRequest from "@/services";

export default memo(() => {
  // 定义状态
  const [highScore, setHighScore] = useState({});

  // 网络请求的代码
  useEffect(() => {
    const fetchData = async () => {
      const data = await HTTPRequest.get({ url: "/home/highscore" });
      setHighScore(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>{highScore.title}</h2>
      <h4>{highScore.subtitle}</h4>
      <ul>
        {highScore?.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});
