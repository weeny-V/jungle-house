import '../styles/Categories.scss';
import { CategoryInterface } from '../interface';
import refresh from '../assets/refresh.png';

function Categories({ setSelect, categories, select }: CategoryInterface) {
    return (
        <div className='jh-categories__wrapper'>
            <select
                value={select}
                onChange={e => setSelect(e.target.value)}
                className='jh-categories'
            >
                <option value=''>all</option>
                {categories.map((cat: string) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <div className='jh-categories__btn' onClick={() => setSelect('')}>
                <img className='refresh' src={refresh} alt='refresh'/>
            </div>
        </div>
    )
}

export default Categories
