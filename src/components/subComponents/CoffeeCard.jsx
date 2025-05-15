import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {




    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffees/${coffee._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setCoffees(coffees.filter(coff=>coff._id !== coffee._id))
                        }
                    })

            }
        });

        console.log(id);

    }



    return (
        <div className="card card-side bg-base-100 shadow-sm border">
            <figure>
                <img
                    src={coffee.photo}
                    alt="Movie" />
            </figure>
            <div className="space-y-3 my-auto">
                <h2 className="text-gray-600"><span className='font-bold'>Name: </span>{coffee.name}</h2>
                <p className="text-gray-600"><span className='font-bold'>Price: </span>{coffee.price}</p>
                <p className="text-gray-600"><span className='font-bold'>Chef: </span>{coffee.chef}</p>
            </div>
            <div className="join join-vertical my-auto space-y-3">
                <button className="btn join-item">View</button>
                <Link to={`/updateCoffee/${coffee._id}`} className="btn join-item">Edit</Link>
                <button onClick={() => handleDelete(coffee._id)} className="btn join-item">Delete</button>
            </div>
        </div>
    );
};

export default CoffeeCard;