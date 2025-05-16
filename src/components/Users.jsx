import React, {  useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';



const Users = () => {
    const initialUsersData = useLoaderData();
    // const { deleteAnUser } = useContext(AuthContext);

    const [users, setUsers] = useState(Array.isArray(initialUsersData) ? initialUsersData : []);


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {

                    await fetch(`http://localhost:3000/users/${id}`, {
                        method: "DELETE"
                    })

                    setUsers(users.filter(user => user._id !== id));

                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                    });
                }
                catch (error) {
                    console.error("Error deleting user:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete user.",
                        icon: "error"
                    });
                }




            }
        });
    }





    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            No.
                        </th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>
                                <h2>{index + 1}</h2>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.name}</div>
                                        <div className="text-sm opacity-50">{user.address}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="badge badge-ghost badge-sm">{user.number}</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-xs">V</button>
                                <button className="btn btn-xs">E</button>
                                <button onClick={() => handleDelete(user._id)} className="btn btn-xs">D</button>
                            </th>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Users;