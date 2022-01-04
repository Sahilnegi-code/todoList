import React , {useState} from 'react';
import MenuCard from './MenuCard';
import  './style.css';
import Menu from './MenuApi';
import Navbar from './Navbar';
const uniqueList =[...new Set( Menu.map((currElem)=>{
    return currElem.category;
})),"all"];

console.log(uniqueList);
function Restaurant() {
    const [menuData , setMenuData] = useState(Menu);
    const [menuList,setmenuList] = useState(uniqueList);
    
   
    const filterItem = (category) =>{
        
        const updatedList = Menu.filter((currElem)=>{
            return category === "all" ? true : currElem.category=== category;
        });  
        console.log(updatedList);
        setMenuData(updatedList);

    }
    return (
        <>
    <Navbar filterItem = { filterItem } menuList = {menuList} />
    <MenuCard data = {menuData}/>
        </>
    )
}

export default Restaurant
