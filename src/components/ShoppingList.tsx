import { useState } from 'react';
import { plantList } from '../datas/planList';
import PlantItem from './PlantItem';
import Categories from './Categories';
import '../styles/ShoppingList.scss';
import Cart from './Cart';
import { cartListInterface, ShoppingListInterface } from '../interface';

function ShoppingList({ cart, updateCart }: ShoppingListInterface) {
    const [select, setSelect] = useState('')
    const categories = plantList.reduce(
        (acc: string[], elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category),
        []
    )

    function addToCart(name: string, price: number) {
        const currentPlantAdded = cart.find((plant: cartListInterface) => plant.name === name)
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter((plant: cartListInterface) => plant.name !== name)
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantAdded.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div className='jh-shopping__wrapper'>
            <Cart cart={cart} updateCart={updateCart}/>
            <Categories
                categories={categories}
                setSelect={setSelect}
                select={select}
            />

            <ul className='jh-shopping__plant-list'>
                {plantList.map(({ id, cover, name, water, light, price, category }) =>
                    !select || select === category ? (
                        <div key={id} className='jh-shopping__plant-item1'>
                            <PlantItem
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                price={price}
                                id={id}
                            />
                            <button className='jh-shopping__plant-btn' onClick={() => addToCart(name, price)}>Add</button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList
