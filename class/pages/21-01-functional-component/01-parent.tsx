import ChildPage from "./02-child";

const ParentPage = () => {
  return (
    <div>
      <ChildPage count={5} />
      {/* 아래와 위는 같다. */}
      {ChildPage({ child: 5 })}
    </div>
  );
};

export default ParentPage;
