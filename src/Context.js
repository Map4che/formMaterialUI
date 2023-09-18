import { useState, createContext } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const values = {
    count,
    suma() {
      setCount(count + 1);
    },
    resta() {
      setCount(count - 1);
    },
    user: {
      status: "Online",
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJzdGF0dXMiOiJPbmxpbmUifQ.MIfj9pz-3nD-zLJnlg_myN3nCR7O7mTtUUaf-pVT3nI",
      theme: "light",
    },
  };

  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};
