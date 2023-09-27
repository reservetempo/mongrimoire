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
    const [sectionId, setSectionId] = useState(() => {
        const data = window.sessionStorage.getItem("id");
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
    const updateSectionId = (id) => {
        window.sessionStorage.setItem("id", JSON.stringify(id));
        setSectionId(id);
    }

    return (
        <ListContext.Provider value={{idArray, setIdArray, updateIdArray, sectionId, setSectionId, updateSectionId}}>
            {children}
        </ListContext.Provider>
    )

}