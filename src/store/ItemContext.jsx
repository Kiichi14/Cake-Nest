/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const itemContext = createContext();

function getInitialState() {
    const cakes = localStorage.getItem('cakes')
    return cakes ? JSON.parse(cakes) : []
}

const ItemProvider = (props) => {
    
const [cake, setCake] = useState(getInitialState);

useEffect(() => {
    localStorage.setItem('cakes', JSON.stringify(cake))
}, [cake]);

return (
    <itemContext.Provider value={[cake, setCake]}>
        {props.children}
    </itemContext.Provider>
);
};

export default ItemProvider;