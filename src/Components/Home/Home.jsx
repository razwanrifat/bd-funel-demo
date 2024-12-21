import React from 'react';
import Todos from '../Todos/Todos';

const Home = () => {
    return (
        <div>
            <h1 className='text text-3xl font-bold text-center underline my-2'>TO-Do Appliction</h1>
            <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs" />
            <Todos></Todos>
        </div>
    );
};

export default Home;