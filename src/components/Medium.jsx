import { useState } from "react";
import { getShorten } from "../helpers/getShorten";

export const Medium = () => {

  const [links, setLinks] = useState([])
  const [input, setInput] = useState('')
  const [error, setError] = useState({ status: false, value: 'hj' })
  const [copy, setCopy] = useState(0)

  const handleLinks = () => {
    if (input !== '') {
      getShorten(input).then((data) => {

        if (data.ok) {
          const success = { status: false, value: '' }
          setError(success)

          setLinks(prevState => ([
            ...prevState, {
              ...data, id: prevState.length + 1
            }
          ]))
        }
        else {
          const new_error = { status: true, value: 'API error' }
          setError(new_error)
        }
      })

    } else {
      const new_error = { status: true, value: 'Please add a link' }
      setError(new_error)
    }
    setInput('')
  }
  return (
    <main>
      <div className="medium__main">
        <div className="medium__main-links">
          <input className={error.status ? 'link__error' : ''} type="text" placeholder="Shorten a link here..." value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="medium__main-links-button" onClick={handleLinks}>Shorten it!</button>
          {
            error.status && <span>{error.value}</span>
          }
        </div>
        {
          links && links.map((link, index) => (
            <div className="medium__links" key={index}>
              <p className="medium__links-text">{link.result.original_link}</p>
              <div className="medium__link-shorten">
                <p>{link.result.full_short_link}</p>
                {(link.id === copy) ?
                  <button className="medium__main-links-button copy" onClick={() => setCopy(link.id)}>Copied!</button> :
                  <button className="medium__main-links-button" onClick={() => setCopy(link.id)}>Copy</button>
                }

              </div>
            </div>
          ))
        }
        <div className="medium__main-statistics">
          <p className="medium__main-statistics-title">Advanced Statistics</p>
          <p className="medium__main-statistics-subtitle">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="medium__main-details">
          <div className="medium__main-details-item recognition" >
            <img src='./images/icon-brand-recognition.svg' alt="Recognition" />
            <p className="medium__main-details-title">Brand Recognition</p>
            <p className="medium__main-details-subtitle">Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <div className="medium__main-details-gap"></div>
          <div className="medium__main-details-item records" >
            <img src='./images/icon-detailed-records.svg' alt="Records" />
            <p className="medium__main-details-title">Detailed Records</p>
            <p className="medium__main-details-subtitle">Gain insights into who clicking your links. Knowing when and where people engage  with your content helps inform better decisions.</p>
          </div>
          <div className="medium__main-details-gap"></div>
          <div className="medium__main-details-item customizable" >
            <img src='./images/icon-fully-customizable.svg' alt="Customizable" />
            <p className="medium__main-details-title">Fully Customizable</p>
            <p className="medium__main-details-subtitle">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
      </div>
      <div className="medium__ad">
        <div className="medium__ad-title">Boost your links today</div>
        <button className="button">Get Started</button>
      </div>
    </main>
  )
}
