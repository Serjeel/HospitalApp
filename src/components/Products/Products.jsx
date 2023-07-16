import axios from 'axios';
import { useEffect, useState } from 'react'
import DoctorImage from '../../images/doctor.jpeg'
import './Products.scss'

const Products = () => {
    const [stat, setStat] = useState('');

    const products = [
        {
            name: 'CHECK-UP 1',
            gender: 'для мужчин',
            products: ['Гормональный скриминг', 'Тестостерон', 'Свободный тестостерон',
                'Глобулин, связывающий половые гормоны'],
            oldPrice: 3500,
            newPrice: 2800
        },
        {
            name: 'CHECK-UP 2',
            gender: 'для мужчин',
            products: ['Гормональный скриминг', 'Тестостерон', 'Свободный тестостерон',
                'Глобулин, связывающий половые гормоны'],
            oldPrice: 3300,
            newPrice: 2700
        },
        {
            name: 'CHECK-UP 3',
            gender: 'для женщин',
            products: ['Гормональный скриминг', 'Тестостерон', 'Свободный тестостерон',
                'Глобулин, связывающий половые гормоны'],
            oldPrice: 4000,
            newPrice: 3200
        }
    ]
    const [productsValue, setProductsValue] = useState(products[0]);

    return (
        <div className='products-block'>
            <div className='products'>
                <div className='products-information'>
                    <h1 className='products-information-header1'>{productsValue.name}</h1>
                    <h2 className='products-information-header2'>{productsValue.gender}</h2>
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
    )
}

export default Products;