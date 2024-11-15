export const Box = ({ children, ...props }) => {
  return (
    <div className="box" {...props}>
      {children}
    </div>
  );
};

export const Inline = ({ children, ...props }) => {
  return (
    <div className="inline" {...props}>
      {children}
    </div>
  );
};

export const Stack = ({ children, ...props }) => {
  return (
    <div className="stack" {...props}>
      {children}
    </div>
  );
};