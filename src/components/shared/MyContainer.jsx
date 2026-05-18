const MyContainer = ({ children, className }) => {
  return (
    <div className={`max-w-7xl w-full px-4 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default MyContainer;
