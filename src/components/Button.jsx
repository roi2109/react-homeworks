const Button = ({ fn }) => {
  return (
    <>
      <button onClick={fn} className="btn btn-primary">
        Configure
      </button>
    </>
  );
};
export default Button;
