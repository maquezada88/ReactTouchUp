import React, {useState} from 'react';

function MyComponent2(){

    const [car, setCar] = useState({year: 2024, make: "Ford", model:"Mustang"});

    function handleYearChange(e){
            setCar(prevCar=> ({...prevCar, year: e.target.value})); //add () arount objects when using arrow functions
    }

    function handleMakeChange(e){
        setCar(prevCar=> ({...prevCar, make: e.target.value})); //add () arount objects when using arrow functions

    }

    function handleModelChange(e){
        setCar(prevCar=> ({...prevCar, model: e.target.value})); //add () arount objects when using arrow functions

    }

    return(
        <div>
            <p>your fav car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>

        </div>
    )

}

export default MyComponent2