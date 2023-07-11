import Logo2 from '../../images/logo2.svg'
import WhatsappImage from '../../images/whatsapp.svg'
import InstagramImage from '../../images/instagram.svg'
import TelegramImage from '../../images/telegram.png'
import './Footer.scss'

const Footer = () => {

    return (
        <footer className='footer-block'>
            <div className='footer'>
                <img className='footer-logo' src={Logo2} alt='Logo' />
                <div className='footer-buttons-block'>
                    <button className='footer-button'>О клинике</button>
                    <button className='footer-button'>Услуги</button>
                    <button className='footer-button'>Специалисты</button>
                    <button className='footer-button'>Цены</button>
                    <button className='footer-button'>Контакты</button>
                </div>
                <div className='footer-icons-block'>
                    <img className='footer-icon' src={InstagramImage} alt='InstahramImage' />
                    <img className='footer-icon' src={WhatsappImage} alt='WhatsappImage' />
                    <img className='footer-icon' src={TelegramImage} alt='TelegramImage' />
                </div>
            </div>
        </footer>
    )
}

export default Footer;