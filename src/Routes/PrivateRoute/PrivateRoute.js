import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import LoadingSpin from "react-loading-spin";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <p className="pt-48">
        <LoadingSpin
          duration="2s"
          width="15px"
          timingFunction="ease-in-out"
          direction="alternate"
          size="100px"
          primaryColor="yellow"
          secondaryColor="#333"
          numberOfRotationsInAnimation={2}
        />
      </p>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
