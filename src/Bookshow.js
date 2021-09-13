import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import env from './settings'

function Bookshow(props) {
    const [list, setList] = useState([])
    const [count,setCount]=useState(0)
    const [selected,setSelected]=useState([])
    let history=useHistory();
    
    let fetchSeats = async() => {
        let c=0;
        let s=[]
        try{
            let data= await axios.get(`${env.api}/seats/${props.match.params.id}`,{
                headers : {
                  "Authorization" : window.localStorage.getItem("app_token")
                }
              })
            //   console.log(data.data[0].seats)
              setList(data.data[0].seats)
              list.forEach(item=>{
                if(item.status){
                    c++;
                    s=[...s,item]

                }                       
         })
                setSelected(s)
              setCount(c)
              console.log(list)
              console.log(selected)
              
           }
        catch(error){
            console.log(error);
        }
    }
    let getSelected=
    useEffect(async() => {
        try{
            fetchSeats();
         }
        catch(error){
            console.log(error);
        }
    }, []);
    let handleChange=async (e,obj)=>{
        // console.log(e)
        if(!obj.booked){
            obj.status=!obj.status
            await axios.put(`${env.api}/seatbook/${props.match.params.id}`,{status:obj.status,_id:obj._id,row:obj.row},{
                headers : {
                    "Authorization" : window.localStorage.getItem("app_token")
                  }
            })
            fetchSeats()
        }
        else{
        }
    }
    // let handleSubmit= async()=>{
    //     try {
    //         list.
    //         await axios.put(`${env.api}/seatbooked/${props.match.params.id}`,{status:obj.status,_id:obj._id,row:obj.row},{
    //             headers : {
    //                 "Authorization" : window.localStorage.getItem("app_token")
    //               }
    //         })
    //     } catch (error) {
            
    //     }
    // }
    return (
        <div className="container d-flex justify-content-around flex-row">
            <div>
            <h3>Ticket Cost: Rs.250 per head</h3>
            <div class="d-flex flex-row" >
                {list.filter((item,index)=>index<10).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status?{color:"#39E500"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" >
                {list.filter((item,index)=>index>=10&index<20).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status?{color:"#39E500"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" >
                {list.filter((item,index)=>index>=20&index<30).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status?{color:"#39E500"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" >
                {list.filter((item,index)=>index>=30&index<40).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status?{color:"#39E500"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" >
                {list.filter((item,index)=>index>=40&index<50).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status?{color:"#39E500"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" >
                {list.filter((item,index)=>index>=50&index<60).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status?{color:"#39E500"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" >
                {list.filter((item,index)=>index>=60&index<70).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status?{color:"#39E500"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" >
                {list.filter((item,index)=>index>=70&index<80).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status?{color:"#39E500"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" >
                {list.filter((item,index)=>index>=80&index<90).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status?{color:"#39E500"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" >
                {list.filter((item,index)=>index>=90&index<100).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status?{color:"#39E500"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            </div>
            <div>
                <div>
                    <h3><i class="p-2 fas fa-square fa-2x" style={{color:"#A5A5A5"}}></i>Available</h3>
                    <h3><i class="p-2 fas fa-square fa-2x" style={{color:"#FF0000"}}></i>Unavailable</h3>
                    <h3><i class="p-2 fas fa-square fa-2x" style={{color:"#39E500"}}></i>Selected</h3>
                </div>
                <div class="p-5">
                    <h3>
                        
                    Total Payable : <span style={{color:'blue'}}>Rs. {250*count}</span><br/>
                    {/* Selected Seats : <span style={{color:'blue'}}></span><br/> */}
                    <button class="btn btn-primary" onClick={handleSubmit} >Make Payment</button>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Bookshow
