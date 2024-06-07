import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, json } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { saveUser,clearUser } from '../../config/slicer';

const UserMenu = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { handleSubmit } = useForm();
    const user = useSelector((state)=>state.auth.user);
    
    const dispatch = useDispatch();

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            try {
                const parsedUser = JSON.parse(savedUser);
                dispatch(saveUser(parsedUser));
            } catch (error) {
                console.error("Error parsing saved user:", error);
            }
        }
    }, [dispatch]);
    

    const handleToggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        dispatch(clearUser());
    };

    return (
        <div className="relative">
            <button onClick={handleToggleDropdown} className="flex items-center space-x-2">
    {user ? (
        user.profilImage ? (
            <>
                <span>{user.nom}</span>
                <img src={user.profilImage} alt="" className="w-10 h-10 rounded-full" />
            </>
        ) : (
            <>
                 <FaUserCircle className="w-6 h-6" />
            </>
        )
    ) : (
        <>
            {/* Si vous souhaitez afficher quelque chose quand il n'y a pas d'utilisateur
            <FaUserCircle className="w-6 h-6" />
            <span>User</span> */}
        </>
    )}
</button>
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                    <NavLink to="/profil" className="block px-4 py-2 hover:bg-gray-200">Profile</NavLink>
                    <form onSubmit={handleSubmit(handleLogout)}>
                        <button type="submit" className="block w-full text-left px-4 py-2 hover:bg-gray-200">Déconnexion</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
