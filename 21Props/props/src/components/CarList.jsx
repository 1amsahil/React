import Element from "./Element";

function CarList({car})
{
    return <>
     {car.map(item => <Element value = {item} />)}
    </>
}

export default CarList