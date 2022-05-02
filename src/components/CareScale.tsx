import { CareScaleInterface } from '../interface';
import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

function CareScale({ scaleValue, careType }: CareScaleInterface) {
    const range = [1, 2, 3]
    const scaleType =
        careType === 'light' ? (
            <img src={Sun} alt='sun-icon' />
        ) : (
            <img src={Water} alt='water-icon' />
        )

    return (
        <div
            onClick={() =>
                alert(
                    `This plant requires ${scaleValue} ${
                        careType === 'light' ? 'light' : "watering"
                    }`
                )
            }
        >
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}

export default CareScale
