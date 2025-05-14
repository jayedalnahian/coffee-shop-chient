import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {




    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const newCoffee = Object.fromEntries(formData.entries());


        fetch('http://localhost:3000/coffees',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCoffee)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('after adding to db', data);
                    Swal.fire({
                        title: "Coffee added successfully!",
                        icon: "success",
                        draggable: true
                    });
                    e.target.reset();
                }

            })
    }



// https://i.ibb.co/zTJG9qC6/2.png
// https://i.ibb.co/xqDgn1R2/3.png
// https://i.ibb.co/gMnp0zvY/4.png
// https://i.ibb.co/S7XZ88KT/5.png
// https://i.ibb.co/9Hfjs3nZ/6.png



    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl'>Add New Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Chef</label>
                        <input type="text" name='chef' className="input w-full" placeholder="Chef Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' className="input w-full" placeholder="Enter coffee supplier" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name='taste' className="input w-full" placeholder="Enter coffee taste" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" name='price' className="input w-full" placeholder="Price per cup" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" name='details' className="input w-full" placeholder="Enter coffee details" />
                    </fieldset>

                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input w-full" placeholder="Enter photo URL" />
                </fieldset>
                <button type='submit' className='btn mt-4 text-[#331A15] w-full bg-[#D2B48C] border border-[#331A15]'>Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;