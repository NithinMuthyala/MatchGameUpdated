import './index.css'

const thumbnailImages = props => {
  const {eachImage, thumbnailImageClicked} = props
  const {id, thumbnailUrl} = eachImage
  const thumbNailClicked = () => {
    thumbnailImageClicked(id)
  }
  return (
    <li className="list-image-item">
      <button
        type="button"
        className="btn-thumbnail"
        onClick={thumbNailClicked}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default thumbnailImages
