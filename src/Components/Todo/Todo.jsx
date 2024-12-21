import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Todo = ({tdProp}) => {
    const notify = () => toast("Wow so easy!");
    return (
        <div>
            <div>
                <div className="card bg-base-100 w-96 shadow-xl my-2">
                    <figure>
                        {/* <img className='w-50'
                        src={img}
                        alt="Shoes" /> */}
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        {}
                        <div className="badge badge-secondary">{tdProp.name}</div>
                        </h2>
                        <p>Daily Routine</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline"></div>
                        <div className="badge badge-outline"></div>
                        </div>

                        <button className="btn btn-accent">Want to Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;