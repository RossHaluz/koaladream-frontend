import { useSelector } from "react-redux"
import { selectCategiries } from "redux/categories/selectors"

const Categories = () => {
const categories = useSelector(selectCategiries);

  return <div className='absolute top-[50px] w-[318px] py-[30px] px-[30px] bg-[#F5FAF6] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.25),_1px_0px_3px_0px_rgba(0,0,0,0.25),_-1px_0px_3px_0px_rgba(0,0,0,0.25)]' >
    <ul className="flex flex-col gap-[15px]">
{categories?.map(({title}) => {
  return <li className="flex flex-col gap-[15px]">
    <h3>{title}</h3>
    <div className="w-full h-[0.5px] bg-[#7FAA84]"></div>
    </li>
})}
</ul>
  </div>
}

export default Categories
