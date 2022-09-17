interface IProps {
  content: string;
  children: JSX.Element;
}

export default function Layout({ content, children }: IProps) {
  return (
    <>
      <div>안녕하세요? 민겸입니다.</div>
      <div>{content}</div>
      <div>{children}</div>
      <div>안녕하세요? 정우입니다.</div>
    </>
  );
}
