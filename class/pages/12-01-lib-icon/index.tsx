import { PlayCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(PlayCircleOutlined)`
  color: pink;

  font-size: 100px;
`;

export default function LibraryIconPage() {
  const onClickForGetId = (event) => console.log(event.target.id);
  return (
    <>
      <div id="qqq">
        <MyIcon onClick={onClickForGetId} />
      </div>
    </>
  );
}
