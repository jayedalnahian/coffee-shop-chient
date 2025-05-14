import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './subComponents/CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData()
    console.log(initialCoffees);

    return (
        <div>
            <div>
                {initialCoffees.map(coffee => <CoffeeCard coffee={coffee}></CoffeeCard>)}
            </div>
        </div>
    );
};

export default Home;