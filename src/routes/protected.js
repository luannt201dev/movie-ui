import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedUserRoute = ({ children }) => {
  const { isLogin } = useSelector((state) => state.auth);
  if (isLogin) {
    return <>{children}</>;
  } else {
    return <Navigate to={{ pathname: "/login" }} />;
  }
};

export const ProtectedAdminRoute = ({ children }) => {
  const { isLogin, user } = useSelector((state) => state.auth);
  if (isLogin ) {
    if (user.name === "Administrator") {
      return <>{children}</>;
    }
    else {
      return <Navigate to={{pathname: "/"}} />
    }
  } else {
    return <Navigate to={{ pathname: "/login" }} />;
  }
};

export const CheckLogin = ({ children }) => {
  const { isLogin } = useSelector((state) => state.auth);

  if (!isLogin) {
    return <>{children}</>;
  } else {
    return <Navigate to={{ pathname: "/" }} />;
  }
};
