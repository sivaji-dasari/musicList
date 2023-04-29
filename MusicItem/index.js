import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const MusicItem = props => {
  const {MusicItemDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = MusicItemDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <li className="music-list-item">
      <div className="track-info-container">
        <img className="music-track-image" src={imageUrl} alt="track" />
        <div className="name-genre-container">
          <p className="track-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
        <div className="duration-delete-container">
          <p className="duration">{duration}</p>
          <button
            className="delete-button"
            type="button"
            data-testId="delete"
            onClick={onDeleteTrack}
          >
            <AiOutlineDelete size={25} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default MusicItem
