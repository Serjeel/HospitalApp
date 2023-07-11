import Logo from '../images/logo.svg'
import Logo2 from '../images/logo2.svg'
import Geotag from '../images/geotag.svg'
import WhatsappImage from '../images/whatsapp.svg'
import InstagramImage from '../images/instagram.svg'
import TelegramImage from '../images/telegram.png'
import RoomImage from '../images/room.png'
import DoctorImage from '../images/doctor.jpeg'
import './MainPage.scss'

const MainPage = () => {

    return (
        <div className="main">
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
            <div className='products-block'>
                <div className='products'>
                    <div className='products-information'>
                        <h1 className='products-information-header1'>CHECK-UP</h1>
                        <h2 className='products-information-header2'>для мужчин</h2>
                        <li className='products-information-service'>Гормональный скриминг</li>
                        <li className='products-information-service'>Тестостерон</li>
                        <li className='products-information-service'>Свободный тестостерон</li>
                        <li className='products-information-service'>Глобулин, связывающий половые гормоны</li>
                        <div className='products-information-price-block'>
                            <span className='products-information-price1'>Всего 2800₽</span>
                            <span className='products-information-price2'>3500</span>
                        </div>
                        <div className='products-information-buttons-block'>
                            <button className='products-information-button1'>Записаться</button>
                            <button className='products-information-button2'>Подробнее</button>
                        </div>
                    </div>
                    <img src={DoctorImage} className='products-image' alt='ProductsImage' />
                </div>
            </div>
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
        </div>
    )
}

export default MainPage;