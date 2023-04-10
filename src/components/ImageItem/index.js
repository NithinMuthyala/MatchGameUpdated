import {Component} from 'react'
import NavBar from '../NavBar'
import TabItem from '../TabItem'
import ThumbnailImages from '../ThumbnailImages'
import './index.css'

class ImageItem extends Component {
  constructor(props) {
    super(props)

    const {imagesList, tabsList} = props

    this.state = {
      imageSlide: imagesList[0].imageUrl,
      activeId: imagesList[0].id,
      activeTabId: tabsList[0].tabId,
      score: 0,
      timelimit: 60,
      isRunning: true,
    }
  }

  componentDidMount() {
    this.timerId = setInterval(this.timerElapse, 1000)
  }

  activeTabButton = tabId => {
    this.setState({activeTabId: tabId})
  }

  thumbnailImageClicked = id => {
    const {activeId, isRunning} = this.state
    const {imagesList} = this.props
    // console.log('Nithin..........')
    if (id === activeId) {
      const index = Math.ceil(Math.random() * (imagesList.length - 1))
      this.setState({
        imageSlide: imagesList[index].imageUrl,
        activeId: imagesList[index].id,
      })
      //   this.setState({activeId: imagesList[index].id})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState(prevState => ({isRunning: !prevState.isRunning}))
      this.clearTimeOutFunc()
    }
  }

  clearTimeOutFunc = () => clearInterval(this.timerId)

  timerElapse = () => {
    console.log('Ntttt')
    const {timelimit, isRunning} = this.state
    if (timelimit !== 0) {
      this.setState(prevState => ({timelimit: prevState.timelimit - 1}))
    } else {
      //   this.setState(prevState => ({isRunning: !prevState.isRunning}))
      this.setState({isRunning: false})
      this.clearTimeOutFunc()
    }
  }

  replayButton = () => {
    this.setState(prevState => ({
      score: 0,
      timelimit: 60,
      isRunning: !prevState.isRunning,
    }))
    this.componentDidMount()
  }

  renderGameCard = () => {
    const {imageSlide, activeTabId, isRunning} = this.state
    const {tabsList, imagesList} = this.props

    const filteredItems = imagesList.filter(
      eachPic => eachPic.category === activeTabId,
    )

    return (
      <>
        <div className="image-slider">
          <img src={imageSlide} alt="match" className="image" />
        </div>
        <ul className="ul-container">
          {tabsList.map(eachTab => (
            <TabItem
              key={eachTab.tabId}
              eachTab={eachTab}
              activeTabButton={this.activeTabButton}
              activeTabId={activeTabId}
            />
          ))}
        </ul>
        <ul className="thumbnail-container">
          {filteredItems.map(eachImage => (
            <ThumbnailImages
              tabClicked={this.tabClicked}
              key={eachImage.id}
              eachImage={eachImage}
              thumbnailImageClicked={this.thumbnailImageClicked}
            />
          ))}
        </ul>
      </>
    )
  }

  gameCompleted = () => {
    const {score} = this.state
    return (
      <div className="container-flex">
        <div className="game-completed-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy"
          />
          <p className="your-score">YOUR SCORE</p>
          <p className="score-text">{score}</p>
          <button
            type="button"
            className="reset-button"
            onClick={this.replayButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {isRunning, score, timelimit} = this.state
    return (
      <div className="main-container">
        <NavBar score={score} timelimit={timelimit} />
        {isRunning ? this.renderGameCard() : this.gameCompleted()}
      </div>
    )
  }
}

export default ImageItem
