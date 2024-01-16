import { BsList, BsCart3 } from 'react-icons/bs'

import logo from '../../assets/imgs/logo-heras-transparent.png'

const Header = () => {
  return (
    <div className="bg-white sticky left-0 top-0">
      <div className="flex mx-auto items-center justify-between   py-4 container">
        <h1>
          <img src={logo} alt="" className="w-32" />
        </h1>
        <div className="flex items-center">
          <div className="flex items-center mr-8 text-lg">
            <BsCart3 size={18} /> <span className="ml-1">1</span>
          </div>
          <BsList className="cursor-pointer" size={38} />
        </div>
      </div>
    </div>
  )
}

export default Header
