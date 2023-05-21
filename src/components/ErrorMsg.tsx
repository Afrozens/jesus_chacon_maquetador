import React, {type ReactNode} from "react";

const ErrorMsg = ({children}: {children: ReactNode}) => {
  return <p className="error">{children}</p>;
};

export default ErrorMsg;
