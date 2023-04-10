import './index.css'

const NavBar = props => {
  const {score, timelimit} = props

  //   console.log(each)
  return (
    <nav className="background-color-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </div>
      <ul className="score-clock">
        <li>
          <p>Score:{score}</p>
        </li>
        <li className="clock-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
            className="clock"
            alt="timer"
          />
          <p>{timelimit} sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
