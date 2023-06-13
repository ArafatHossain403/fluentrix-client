import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const SelectedClasses = () => {

    const [selectedClasses, setSelectedClasses]= useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/coursesCart')
        .then(res => res.json())
        .then(data => {
           
            setSelectedClasses(data)
        })
    },[]);

    const totalPrice= selectedClasses.reduce((sum, classes ) => classes.price + sum, 0);

    return (
        <div>
            <Helmet>
                <title>fluentrix | Selected Classes</title>
            </Helmet>
            <div className="uppercase flex gap-3">
            <h2><span className="font-bold text-lg">Selected Classes:</span> {selectedClasses.length}</h2>
            <h2><span className="font-bold">Total Price:</span> ${parseFloat(totalPrice).toFixed(2)}</h2>
            <button className="btn btn-warning">Pay</button>
            </div>
            
        </div>
    );
};

export default SelectedClasses;