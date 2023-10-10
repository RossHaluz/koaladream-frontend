import { useLocation } from "react-router-dom"

const Breadcrumbs = () => {
const location = useLocation();
console.log(location);
console.log(decodeURIComponent(location.pathname));

  return (
    <div>
      
    </div>
  )
}

export default Breadcrumbs
