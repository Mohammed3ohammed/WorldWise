import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";


function ProductedRoute( {children} ) {
    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated)  navigate("/");
        },
     [isAuthenticated, navigate]
    );
    return isAuthenticated ? children : null;
}

export default ProductedRoute;