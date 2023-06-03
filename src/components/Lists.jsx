/* eslint-disable react/prop-types */

export const Lists = ({ className }) => {
  return (
    <div className={className}>
      <ul >
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <hr style={{ border: '0.5px solid hsl(257, 7%, 63%)', width: '100%' }} />
      <div className="login">
        <ul>
          <li>Login</li>
        </ul>
        <button className="button">Sign in</button>
      </div>
    </div>
  )
}
