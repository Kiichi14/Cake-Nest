/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const adminContext = createContext();

const AdminProvider = (props) => {
    
const [admin, setAdmin] = useState(false);

return (
    <adminContext.Provider value={[admin, setAdmin]}>
        {props.children}
    </adminContext.Provider>
);
};

export default AdminProvider;