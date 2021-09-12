import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import env from './settings';
function Addtheatre() {
    const [name, setname] = useState("");
    let history=useHistory();
    
    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let logindata = await axios.post(`${env.api}/addtheatre`, {name},{
                headers : {
                  "Authorization" : window.localStorage.getItem("app_token")
                }
              })
            console.log(logindata)
            history.push("/user")
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col col-md-6">
                        <label>Theatre Name</label>
                        <input type="text" value={name} onChange={(e)=>e.target.value} className="form-control"/>
                    </div>
                    <div className="col col-md-12">
                            <input type="submit" value="Submit" className="btn btn-primary mt-3" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Addtheatre
