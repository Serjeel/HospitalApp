import Logo from '../../images/logo.svg'
import Geotag from '../../images/geotag.svg'
import WhatsappImage from '../../images/whatsapp.svg'
import './Header.scss'

const Header = () => {

    return (
        <>
            <header className='header1-block'>
                <div className='header1'>
                    <div className='header1-content1'>
                        <img className='header1-content1-logo' src={Logo} alt='Logo' />
                        <div className='header1-content1-locationTag-block'>
                            <img className='header1-content1-locationTag' src={Geotag} alt='Geotag' />
                        </div>
                        <div className='header1-content1-address-block'>
                            <span className='header1-content1-address-city'>Ростов-на-Дону</span>
                            <span className='header1-content1-address-street'>ул. Ленина, 2Б</span>
                        </div>
                    </div>
                    <div className='header1-content2'>
                        <img src={WhatsappImage} alt='WhatsappImage' />
                        <span className='header1-content2-number'>+7(863) 000 00 00</span>
                        <button className='header1-content2-button'>Записаться на приём</button>
                    </div>
                </div>
            </header>
            <header className='header2-block'>
                <div className='header2'>
                    <button className='header2-button'>О клинике</button>
                    <button className='header2-button'>Услуги</button>
                    <button className='header2-button'>Специалисты</button>
                    <button className='header2-button'>Цены</button>
                    <button className='header2-button'>Контакты</button>
                </div>
            </header>
        </>
    )
}

export default Header;