import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import env from './settings'

function User() {
    const [list, setList] = useState([])
    let history=useHistory()
    let fetchMovies = async() => {
        try{
            let data= await axios.get(`${env.api}/listmovies`,{
                headers : {
                  "Authorization" : window.localStorage.getItem("app_token")
                }
              })
             
            data.data[0].forEach(obj1 => {
                data.data[1].forEach(obj2=>{
                    if(obj1.theatre==obj2._id){
                        obj1.name=obj2.name
                    }
                })
            });
            setList((data.data)[0])
            // setList(data.data[0])
            // console.log(list)
            // setList([...data.data])
            // setLoading(false)
        }
        catch(error){
            console.log(error);
            // setLoading(false)
        }
    }
    useEffect(async() => {
        try{

            fetchMovies();
        }
        catch(error){
            console.log(error);
            // setLoading(false)
        }
    }, []);
    return (
        <div class="container">
            {window.localStorage.getItem("app_token")?<button className="btn btn-primary" onClick={() => {
          window.localStorage.removeItem("app_token");
          history.push("/login-user")
        }}>Logout</button> : <></> }
        <div class="container">
            <div class="container row">
            
            {list.map((obj)=>{
                return(
                    <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
                    <div class="card card-inverse card-info">
                        <img class="card-img-top" src={`${obj.url}`}/>
                        <div class="card-block">
                            <figure class="profile profile-inline">
                                {/* <img src={obj.url} class="profile-avatar" alt=""/> */}
                            </figure>
                            <h4 class="card-title">{obj.movieName}</h4>
                            <div class="card-text">
                                Time: {obj.time}<br/>
                                At: {obj.name}
                            </div>
                        </div>
                        <div class="card-footer">
                            <Link class="btn btn-info btn-sm" to="/bookshow">Book Now</Link>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
        </div></div>
    )
}

export default User
