import { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { Menu } from './Menu';
import { Lists } from './Lists';

export const NavBar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <header >
      <div className="navbar__main">
        <img src="./images/logo.svg" alt="logo" />
        <Lists className={'navbar__lists'} />
        <IoMenuSharp size={"40px"} className='nav__bar-icon' onClick={() => setMenu(!menu)} />
      </div>
      <Menu menu={menu} setMenu={setMenu} />
    </header>
  )
}
