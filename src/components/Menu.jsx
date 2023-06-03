/* eslint-disable react/prop-types */
import { Lists } from "./Lists";

export const Menu = ({ menu }) => {
  return (
    <div className={menu ? 'show__menu' : 'hide__menu'} style={{ position: 'absolute', borderRadius: '10px', top: '70px', left: '15px', right: '15px', backgroundColor: 'hsl(257, 27%, 26%)' }}>
      <Lists className={'menu__lists'} />
    </div>
  )
}
