interface IProps {
  type?: "button" | "reset";
  children: string;
  style?: { opacity: string };
}

const Button01 = (props: IProps) => {
  return (
    <button type={props.type} style={props.style}>
      {props.children}
    </button>
  );
};

export default Button01;
