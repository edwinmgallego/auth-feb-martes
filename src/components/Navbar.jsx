import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const { user, signOutUser } = useContext(UserContext);
    const handleClickSignOut = async () => {
        try {
            await signOutUser();
        } catch (error) {
            console.log(error.code);
        }
    }
    return (
        <>
            {user ? (
                <>
                    <NavLink to='/'>| Home |</NavLink>
                    <button onClick={handleClickSignOut}>Logout</button>
                </>

            ) : (
                <>
                    <NavLink to='/login'>| login |</NavLink>
                    <NavLink to='/register'>| Register |</NavLink>

                </>
            )
            }






        </>

    )
}

export default Navbar