import styled from "@emotion/styled";
import { useEffect } from "react";

interface IMapProps {
  latitude: number;
  longitude: number;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = ({ latitude, longitude }: IMapProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=5b7901e11a2918607324eecf01a56e00";
    script.type = "text/javascript";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //  지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표.
          level: 3, //  지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);
      });
    };
  }, []);
  return (
    <>
      <MapBox id="map" />
    </>
  );
};

export default KakaoMap;

const MapBox = styled.div`
  max-width: 400px;
  aspect-ratio: 400 / 300;
`;
