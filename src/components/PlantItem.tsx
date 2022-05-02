import CareScale from './CareScale';
import '../styles/PlantItem.scss';
import { PlantItemInterface } from '../interface';

function PlantItem({ cover, name, water, light, price }: PlantItemInterface) {
    return (
        <li className='jh-plant__item'>
            <span className='jh-plant__price'>{price}€</span>
            <img className='jh-plant__cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem
