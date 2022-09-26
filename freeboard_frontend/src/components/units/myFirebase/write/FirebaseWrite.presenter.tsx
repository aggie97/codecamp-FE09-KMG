const MyFirebaseWriteUI = ({ onChangeInput, onSubmit }) => {
  return (
    <>
      <div>
        작성자 : <input onChange={onChangeInput} id="writer" type="text" />
      </div>
      <div>
        제목 : <input onChange={onChangeInput} id="title" type="text" />
      </div>
      <div>
        내용 : <input onChange={onChangeInput} id="contents" type="text" />
      </div>

      <div>
        <button onClick={onSubmit}>등록하기</button>
      </div>
    </>
  );
};

export default MyFirebaseWriteUI;
