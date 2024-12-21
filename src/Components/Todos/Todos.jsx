import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';

const Todos = () => {
    const [allTodos, SetAllTodos]=useState([])
    useEffect(()=>{
     fetch('TodoItems.json')
      .then(response => response.json())
      .then(data => SetAllTodos(data))
    },[])
    return (
        <div>
            <h1>Available Item :{allTodos.length} </h1>
            <div className='md:grid gap-2 grid-cols-2 '> 
                {
                    allTodos.map(td=><Todo tdProp={td}></Todo>)
                }
            </div>
        </div>
    );
};

export default Todos;