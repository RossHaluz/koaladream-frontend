import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectIsLoging, selectIsRefreshing } from "redux/auth/selectors";

const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
const isLoging = useSelector(selectIsLoging);
const isRefreshing = useSelector(selectIsRefreshing);

const shoulldRedirect = !isLoging && !isRefreshing;

  return shoulldRedirect ? <Navigate to={redirectTo}/> : Component;
}

export default PrivateRoute
