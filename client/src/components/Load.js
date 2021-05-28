import React, { useEffect, useContext } from 'react'
import {IsLoadedContext} from '../context/isLoadedContext';
import { useHistory } from "react-router-dom";

const Load = () => {
    const {isLoaded} = useContext(IsLoadedContext);
    const history = useHistory();
    
    useEffect(() => {
        if (isLoaded){
            history.push("/search-results");
        }
    }, [isLoaded]);

    return (
        <div>
            Loading
        </div>
    )
}

export default Load
