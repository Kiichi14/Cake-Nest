/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const updateContext = createContext();

const UpdateProvider = (props) => {
    
    const [selectUpdate, setSelectUpdate] = useState(false);
    const [itemSelect, setItemSelect] = useState();
    
    return (
        <updateContext.Provider value={{isUpdate: [selectUpdate, setSelectUpdate], isSelect:[itemSelect, setItemSelect]}}>
            {props.children}
        </updateContext.Provider>
    );
    };
    
    export default UpdateProvider;