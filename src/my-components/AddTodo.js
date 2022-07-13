import { React, useState } from 'react'
import "./AddTodo.css"

export const AddTodo = (props) => {
    const [title, setTitle] = useState();
    const [dec, setDes] = useState();
    const submit = (e) => {
        // *****its must to prevent the default bheaviour of submit to allow required change
        e.preventDefault();
        if (!title || !dec) {
            alert("U have missed dec or title");
        }
        else {
            props.addTodo(title, dec);
            // setTitle("")
            // setDes("")
        }
    }
     

    return (

        <>
            <div className="container">
                <h3 id="headAddTodo" className='text-center' >Add Todo</h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title">Add Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                            className="form-control" id="title" placeholder="add todo..." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dec">Description</label>
                        <input type="text" value={dec} onChange={(e) => setDes(e.target.value)}
                            className="form-control" id="title" placeholder="description..." />
                    </div>
                    <button type="submit"  className="btn btn-success" >AddTodo</button>
                </form>
            </div>
        </>
    )
}
