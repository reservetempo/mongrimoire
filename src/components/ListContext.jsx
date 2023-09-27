import { createContext, useContext, useState } from "react";


export const ListContext = createContext(null);

export const useListContext = () => useContext(ListContext);

export const ListProvider = ({children}) => {
    const [idArray, setIdArray] = useState(() => {
        const data = window.sessionStorage.getItem("idArray");
        if (data) {
            return JSON.parse(data)
        }
        else {
            return null
        }

    });

    const updateIdArray = (arr) => {
        window.sessionStorage.setItem("idArray", JSON.stringify(arr));

        setIdArray(arr);
    }

    return (
        <ListContext.Provider value={{idArray, setIdArray, updateIdArray}}>
            {children}
        </ListContext.Provider>
    )

}