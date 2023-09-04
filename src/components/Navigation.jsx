import { Link } from "react-router-dom"

const Navigation = () => {
  return <nav className="flex items-center gap-[100px]">
    <Link className="text-[16px]">Про магазин</Link>
    <Link className="text-[16px]">Відгуки</Link>
    <Link className="text-[16px]">Доставка та оплата</Link>
    <Link className="text-[16px]">Контакти</Link>
  </nav>
}

export default Navigation
