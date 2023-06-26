import React from "react";
const Context=React.createContext({
    array:[],
    onAdd:(item:any)=>{},
    onDelete:(id:any)=>{},
})
export default Context