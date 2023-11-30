/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext();

function getInitialState() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

const UserProvider = (props) => {
    
    const [user, setUser] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <userContext.Provider value={[user, setUser]}>
            {props.children}
        </userContext.Provider>
    );
};


export default UserProvider;