import { stack as Burguer } from 'react-burger-menu'
import { CiShoppingCart } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <Burguer className="text-slate-200">
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/contact">
        Contact
      </Link>
      <Link className="menu-item" to="/cart">
        <CiShoppingCart className="w-[1.8rem] h-[1.8rem]" />
      </Link>
    </Burguer>
  )
}
