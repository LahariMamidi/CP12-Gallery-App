// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setcActiveImageId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const imageClassName = isActive ? `image active` : `image`

  const onClickImage = () => {
    setcActiveImageId(id)
  }

  return (
    <li className="img-bg">
      <button className="btn" type="button" onClick={onClickImage}>
        <img
          className={imageClassName}
          alt={thumbnailAltText}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
