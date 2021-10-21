const ButtonTpast = ({ children, handleClick, btn }) => (
  <button className={btn} onClick={handleClick}>
    {children}
  </button>
);

export default Button;
