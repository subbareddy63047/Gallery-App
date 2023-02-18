// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {each, filterTheImages, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = each

  const Identify = () => {
    filterTheImages(id)
  }

  const Check = isActive ? 'image1' : 'images'

  return (
    <li className="list-a">
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={` ${Check}`}
          onClick={Identify}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
