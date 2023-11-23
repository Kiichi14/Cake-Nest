/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import fakeMenu2 from '../fakeData/fakeMenu';

// eslint-disable-next-line react-refresh/only-export-components
export const itemContext = createContext();

const ItemProvider = (props) => {
    
const [cake, setCake] = useState(fakeMenu2);

return (
    <itemContext.Provider value={[cake, setCake]}>
        {props.children}
    </itemContext.Provider>
);
};

export default ItemProvider;