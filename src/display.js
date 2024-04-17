import React,{ useState, useEffect }from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
export default function Display() {
  const [dat, setData] = useState([{
    "id":null,
    "movie":null,
    "image":null,
    "imdb_url":null
  }]);
  
  function daa()
  {
    console.log(dat)
  }
  
  const id = dat.map((number) =>  <li>{number.id}</li>);
    const dataHolder = useEffect(
        () => {
            // this.http.
            axios.get("https://dummyapi.online/api/movies").then(
                success => {
                   
                    setData(success.data)
                }, error => {
                    console.log("Error" + error)
                }
            )
        }
      );
  return <>
    <div clss='myData'>
    <div>
    {dat.map(
      (dta)=><div className='myData'> <p>Id:{dta.id}</p> <h1>{dta.movie}</h1> 
      <br/><img src={dta.image} alt='Image Not Found'></img>      Url:{dta.image}<br/>
       Imdb:<a href={dta.imdb_url}>Rating</a>
       </div>
    )}
    </div>
    </div>
    </>
}
