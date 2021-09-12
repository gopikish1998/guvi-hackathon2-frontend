import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import env from './settings';

function Addmovie(props) {
    const [movieName, setMovieName] = useState("");
    const [time, setTime] = useState("");
    const [url, setUrl] = useState("");
    let history=useHistory();
    
    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let data = await axios.post(`${env.api}/addshow/${props.match.params.id}`, {movieName,time,url},{
                headers : {
                  "Authorization" : window.localStorage.getItem("app_token")
                }
              })
            console.log(props.match.params.id)
            history.push(`/theatre/${props.match.params.id}`)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col col-md-6">
                        <label>Movie Name</label>
                        <input type="text" value={movieName} onChange={(e)=>setMovieName(e.target.value)} className="form-control"/>
                    </div>
                    <div className="col col-md-6">
                        <label>Show Time</label>
                        <input type="text" value={time} onChange={(e)=>setTime(e.target.value)} className="form-control"/>
                    </div>
                    <div className="col col-md-6">
                        <label>Poster URL</label>
                        <input type="url" value={url} onChange={(e)=>setUrl(e.target.value)} className="form-control"/>
                    </div>
                    <div className="col col-md-12">
                            <input type="submit" value="Submit" className="btn btn-primary mt-3" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Addmovie
