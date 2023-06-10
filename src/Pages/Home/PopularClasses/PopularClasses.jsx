import { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";


const PopularClasses = () => {
    const [classes, setClass]= useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            const popularClasses= data.slice(0,6);
            setClass(popularClasses)
        })
    },[])
    return (
        <div>
            <p className="text-center">--------------------------------</p>
            <h2 className="text-center text-3xl font-bold text-orange-600 my-5">Our Popular Classes</h2>
            <p className="text-center">--------------------------------</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-7">
            
                {
                    classes.map(classes => <PopularClassCard key={classes._id} classes={classes}></PopularClassCard>)
                }
            </div>

            
        </div>
    );
};

export default PopularClasses;