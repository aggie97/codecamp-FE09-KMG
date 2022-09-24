import axios from "axios";
import { useEffect, useState } from "react";

const CallApiWithUseEffect = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const getCats = async () => {
      const result = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      setData(result.data[0].url);
      console.log(result.data[0]);
    };
    void getCats();
  }, []);
  return (
    <>
      <div>
        <img src={data} />
      </div>
    </>
  );
};

export default CallApiWithUseEffect;
