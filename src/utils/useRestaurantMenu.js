import { RESTAURANT_MENU_API } from "./constants";
import { useState,useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [ restaurantMenu,setRestaurantMenu] = useState(null);

    useEffect(()=>{
        window.scrollTo(0, 0);
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(RESTAURANT_MENU_API + resId);
        const json = await data.json();
        setRestaurantMenu(json.data);

    }
    return restaurantMenu;
};

export default useRestaurantMenu;
