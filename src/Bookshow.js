import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import env from './settings'

function Bookshow(props) {
    const [list, setList] = useState([])
    const [count,setCount]=useState(0)
    const [selected,setSelected]=useState([])
    const [userid, setUserid]=useState('')
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
            //   console.log(data.data[0].userid)
              setUserid(data.data[0].userid)
              setList(data.data[0].seats)
              list.forEach(item=>{
                if(item.status&& !item.booked){
                    c++;
                    s=[...s,item]

                }                       
         })
                setSelected(s)
              setCount(c)
            //   console.log(list)
            //   console.log(selected)
              
           }
        catch(error){
            console.log(error);
        }
    }
    let getSelected=
    useEffect(async() => {
        try{
            {window.localStorage.getItem("app_token")? <></>:history.push('/login-admin')}
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
    let handleSubmit= async(e)=>{
        e.preventDefault()
        try {
            
            let data=await axios.put(`${env.api}/seatbooked/${props.match.params.id}`,{userid},{
                headers : {
                    "Authorization" : window.localStorage.getItem("app_token")
                  }
            })
            console.log(data.data.data[0].seats.filter(obj=>obj.booked==true&&obj.bookedid==userid))
            alert('tickets sent on mail')
            history.push("/")
        } catch (error) {
            
        }
    }
    let select = '';
    return (
        <div className="container d-flex justify-content-around flex-row row">
            <div className='col-lg-6'>
            <h3>Ticket Cost: Rs.250 per head</h3>
            {/* <div className='d-flex flex-row'>Hi</div> */}
            <div class="d-flex flex-row" ><h3 class='p-2'>A</h3>
                {list.filter((item,index)=>index<10).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status&&obj.statusid==userid?{color:"#39E500"}:obj.status?{color:"#FF0000"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" ><h3 class='p-2'>B</h3>
                {list.filter((item,index)=>index>=10&index<20).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status&&obj.statusid==userid?{color:"#39E500"}:obj.status?{color:"#FF0000"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" ><h3 class='p-2'>C</h3>
                {list.filter((item,index)=>index>=20&index<30).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status&&obj.statusid==userid?{color:"#39E500"}:obj.status?{color:"#FF0000"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" ><h3 class='p-2'>D</h3>
                {list.filter((item,index)=>index>=30&index<40).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status&&obj.statusid==userid?{color:"#39E500"}:obj.status?{color:"#FF0000"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" ><h3 class='p-2'>E</h3>
                {list.filter((item,index)=>index>=40&index<50).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status&&obj.statusid==userid?{color:"#39E500"}:obj.status?{color:"#FF0000"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" ><h3 class='p-2'>F</h3>
                {list.filter((item,index)=>index>=50&index<60).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status&&obj.statusid==userid?{color:"#39E500"}:obj.status?{color:"#FF0000"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" ><h3 class='p-2'>G</h3>
                {list.filter((item,index)=>index>=60&index<70).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status&&obj.statusid==userid?{color:"#39E500"}:obj.status?{color:"#FF0000"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" ><h3 class='p-2'>H</h3>
                {list.filter((item,index)=>index>=70&index<80).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status&&obj.statusid==userid?{color:"#39E500"}:obj.status?{color:"#FF0000"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" ><h3 class='p-2'>I</h3>
                {list.filter((item,index)=>index>=80&index<90).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status&&obj.statusid==userid?{color:"#39E500"}:obj.status?{color:"#FF0000"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            <div class="d-flex flex-row" ><h3 class='p-2'>J</h3>
                {list.filter((item,index)=>index>=90&index<100).map(obj=>{return(<span onClick={(e)=>handleChange(e,obj)} ><i class="p-2 fas fa-square fa-2x" style={obj.booked?{color:"#FF0000"}:obj.status&&obj.statusid==userid?{color:"#39E500"}:obj.status?{color:"#FF0000"}:{color:"#A5A5A5"}}></i></span>
            )})}
            </div>
            </div>
            <div className='col-lg-4'>
                <div>
                    <h3><i class="p-2 fas fa-square fa-2x" style={{color:"#A5A5A5"}}></i>Available</h3>
                    <h3><i class="p-2 fas fa-square fa-2x" style={{color:"#FF0000"}}></i>Unavailable</h3>
                    <h3><i class="p-2 fas fa-square fa-2x" style={{color:"#39E500"}}></i>Selected</h3>
                </div>
                <div class="p-5">
                    <h3>
                        
                    Total Payable : <span style={{color:'blue'}}>Rs. {250*count}</span><br/>
                    {/* Selected Seats : <span style={{color:'blue'}}></span><br/> */}
                    <button class="btn btn-primary" disabled={!count} onClick={e=>handleSubmit(e)} >Make Payment</button>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Bookshow
