const Button = ({ text, color }) => {
  return (
    <div>
      <button className="add" style={{ backgroundColor: color }}>
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  text: "add",
  color: "lightGreen",
};
export default Button;
