import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { selectCategiries } from "redux/categories/selectors";

const Categories = () => {
const categories = useSelector(selectCategiries);

  return <div className='absolute top-[50px] z-10 w-[318px] py-[30px] px-[30px] bg-[#F5FAF6] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.25),_1px_0px_3px_0px_rgba(0,0,0,0.25),_-1px_0px_3px_0px_rgba(0,0,0,0.25)]' >
    <ul className="flex flex-col gap-[15px]">
{categories?.map(({title, _id: id}) => {
  return <Link to={`${title}`} key={id} className="flex flex-col gap-[15px] after:w-full after:h-[0.5px] after:bg-[#7FAA84] last-of-type:after:hidden" >
  <li>
    <h3>{title}</h3>
    </li>
  </Link>
})}
</ul>
  </div>
}

export default Categories
