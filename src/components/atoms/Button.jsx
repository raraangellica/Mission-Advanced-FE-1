const Button = ({ children, variant, ...props }) => {
  return (
    <button className={variant} {...props}>
      {children}
    </button>
  );
};

export default Button;
