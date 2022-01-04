import React,{useState,useEffect} from 'react'
import "./style.css";

const getLocalData =()=>{
    const lists = localStorage.getItem("todolist");
    if(lists){
        return JSON.parse(lists);
    }
    else{
        return [];
    }
}
function ToDoReact() {
    const [inputData, setinputData] = useState("");
    const [items ,setItems ] = useState(getLocalData());
    const [isEditItem , setIsEditItem]  = useState("");
    const [toggleButton , setToggleButton] = useState(false);
    const editButton = (id)=>{
        const item_todo_edited = items.find((currElem)=>{
            return currElem.id === id ;
        })
        setinputData(item_todo_edited.name);
    setIsEditItem(id);
    setToggleButton(true);
    };
    const addItem = ()=>{
        const myNewInputData = {
            id: new Date().getTime().toString(),
            name :inputData
        };

        if(!inputData){
            alert("plz fill the data");
        }
        else if(toggleButton && inputData){
            setItems(items.map((currElem)=>{
                if(currElem.id === isEditItem){
                    return {...currElem , name : inputData };
                }
                return currElem;
            }));

            setinputData("");
    setIsEditItem("");
    setToggleButton(false);

        }
        else{
            setItems([...items,myNewInputData])
            setinputData("");
        }
    
    }
    const deleteItem =(id)=>{
        const   updatedItems = items.filter((currElem)=>{
            return currElem.id != id;
        })
        console.log(updatedItems)
        setItems(updatedItems);
    };

    // adding localStorage

    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items) );
     },[items] );



    return (
        <>
        <div className="main-div">
        <div className='child-div'>

        <figure>
        <img src="https://icon-library.com/images/todo-list-icon/todo-list-icon-17.jpg" alt="todologo" />
        <figcaption>Add your List here</figcaption>
        </figure>

        <div className='addItems'>
        <input type="text" placeholder='Add Items' className='form-control'
        onChange={(e)=>setinputData(e.target.value)} 
        value = {inputData}
        />
        {
            toggleButton? 
                    (
                <i class="far fa-edit add-btn" onClick={()=>addItem()}></i>
                    )
                :
                    (
                    
                    <i class="fa fa-plus add-btn" onClick={()=>addItem()}></i>
                    )
        }

        </div>
        

        
        <div className='showItems'>
        {

            items.map((currElem,index)=>{
return(
                <div className='eachItem' key={index}>
                <h3>{currElem.name}</h3>
                <div className='todo-btn' >
                <i class="far fa-edit add-btn" onClick={()=>editButton(currElem.id)} ></i>
                <i class="far fa-trash-alt add-btn" onClick={()=>{
                    console.log(currElem);
                    deleteItem(currElem.id)
                }}></i>
                
                    </div>
                    </div>

             ) })
        }
        </div>


    <div className='showItems'>
    <button className='btn effect04' data-sm-link-text =" Remove All">
    <span>ADD</span>
    </button>
    </div>

        </div>
        </div>            
        </>
    )
}

export default ToDoReact
