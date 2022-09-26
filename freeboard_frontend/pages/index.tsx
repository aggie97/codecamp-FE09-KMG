import { useEffect, useState } from "react";
import axios from "axios";

const AntdModal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      const result = await axios.get(
        "https://dog.ceo/api/breeds/image/random/12"
      );
      setData(result.data.message);
    };

    void getDogs();
  }, []);
  console.log(data);
  return (
    <div style={{ margin: "0 auto", width: "1240px" }}>
      {data.map((dog, i) => (
        <img width={300} height={300} key={i} src={dog} />
      ))}
    </div>
  );
};

export default AntdModal;
