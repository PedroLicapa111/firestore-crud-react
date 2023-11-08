import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const LinkForm = (props) => {
    const [links, setLinks] = useState([])

    const linksCollection = collection(db,"links")

    const getLinks = async(e) => {
        const data = await getDocs(linksCollection)
        setLinks(
            data.docs.map((doc) => ({...doc.data(), id:doc.id}))
        )

        console.log(links)
    }

    useEffect( () => {
        getLinks()
    }, [] )

    return (
        <div>LinkForm</div>
    )

    const initialStateValues = {
        url:'',
        name: '',
        description: '',
    }

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = (e) => {
        const{name, value} = e.target;
        setValues({...values, [name]: value});        
    }

    const handleSubmit = (e) => {
        e.preventDefault();        
        props.addOrEdditLink(values);
    }

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i class="material-icons">insert_link</i>
                </div>
                <input 
                    type="text"
                    className="form-control"           
                    placeholder="https://someurl.com"
                    name="url"
                    onChange={handleInputChange}                     
                />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i class="material-icons">create</i>
                </div>
                <input type="text" 
                className="form-control" 
                name="name" 
                placeholder="Website Name" 
                onChange={handleInputChange}/>
            </div>

            <div className="form-group">
                <textarea name='description' rows='3' className="form-control"
                placeholder="Write a description" onChange={handleInputChange}></textarea>
            </div>

        <button className="btn btn-primary btn-block">
            Save
        </button>

        </form>
    )
}

export default LinkForm;