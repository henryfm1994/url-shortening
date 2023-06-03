import { logo, menu, icons } from "../data";

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <svg xmlns="http://www.w3.org/2000/" width="121" height="33"><path fill="#FFF" d={logo.d} /></svg>
        <div className="footer__menu">
          {
            menu.map(item => (
              <ul key={item.id}>
                <li className="footer__menu-header">{item.header}</li>
                {item.elem.map(item => (
                  <li key={item.id}>{item.text}</li>
                ))}
              </ul>
            ))
          }
        </div>
        <div className="footer__social">
          {
            icons.map(item => (
              <svg key={item.id} xmlns="http://www.w3.org/2000/svg" width="24" height="24"> <path fill="#FFF" d={item.d} /> </svg>
            ))
          }
        </div>
      </div>
    </footer>
  )
}
