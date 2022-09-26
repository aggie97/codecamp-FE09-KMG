const MyFirebaseListUI = ({ data }) => {
  return (
    <div>
      {data.map((el, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "20px",
            padding: "1em 0",
            border: "1px solid black",
          }}
        >
          <div>{el.writer}</div>
          <div>{el.title}</div>
          <div>{el.contents}</div>
        </div>
      ))}
    </div>
  );
};

export default MyFirebaseListUI;
