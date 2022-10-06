import useAuth from "../../src/components/commons/hooks/useAuth";

const CustomHooksUseAuthPage = () => {
  useAuth();
  return <div>프로필 페이지입니다.</div>;
};

export default CustomHooksUseAuthPage;
