import RoomImage from '../../images/room.png'
import './Prewiev.scss'

const Prewiev = () => {

    return (
        <div className='preview-block'>
            <div className='preview'>
                <div className='preview-description-block'>
                    <div className='preview-description'>
                        <h1 className='preview-description-header'>
                            Многопрофильная клиника для детей и взрослых
                        </h1>
                        <span className='preview-description-text'>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua</span>
                    </div>
                </div>
                <img src={RoomImage} className='preview-image' alt='InformImage' />
            </div>
        </div>
    )
}

export default Prewiev;