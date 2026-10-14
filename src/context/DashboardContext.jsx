import { useState,createContext, useContext } from "react";
import data from "../data/dashboardData.json"

const DashboardContext=createContext();

export function DashboardProvider({children}){
    const [categories, setCategories]=useState(data.categories);
    const [searchText, setSearchText]=useState("");

    function toggleWidget(categoryId,widgetId){
        const updatedCategories=categories.map((category)=>{
            if(category.id!==categoryId){
                return category;
            }
            const updatedWidgets=category.widgets.map((widget)=>{
                if(widget.id===widgetId){
                    return {...widget,active:!widget.active}
                }
                return widget;
            });
            return {...category,widgets:updatedWidgets}
        });
        setCategories(updatedCategories);
    }

    function addWidget(categoryId,name,text){
        const newWidget={
            id:'w'+ Date.now(),
            name: name,
            text: text,
            active: true,
        };

        const updatedCategories=categories.map((category)=>{
            if(category.id!==categoryId){
                return category;
            }
            return {...category,widgets:[...category.widgets,newWidget]};
        })
        setCategories(updatedCategories);
    }

    return(
           <DashboardContext.Provider value={{categories,searchText,setSearchText,toggleWidget,addWidget}}>
            {children}
           </DashboardContext.Provider>
    )

}

export function useDashboard(){
    return useContext(DashboardContext);
}