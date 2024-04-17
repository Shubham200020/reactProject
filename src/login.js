import React,{ useState, useEffect }from 'react'
import axios from 'axios'

export default function Login() {
  const[usrvr,setVarifyusr]=useState('');
  const [user, setUser] = useState('');
  const [data, setData] = useState({
    "id":null,
    "user":null,
    "password":null
  });
  const [verifypass,setVerifypass]=useState('');
  const [verifyusr,setVerifyusr]=useState({
    "id":null,
    "user":null,
    "password":null
  });
  const [password,setPasswod] = useState('');


  useEffect(
    () => {
        // this.http.
        axios.post("http://localhost:8080/project/login/"+password+"/"+user).then(
            success => {
               
                setData(success.data)
            }, error => {
                console.log("Error" + error)
            }
        )
    }
  )


  useEffect(
    () => {
        // this.http.
        axios.post("http://localhost:8080/project/verifyUser/"+user).then(
            success => {
               
              setVerifyusr(success.data)
            }, error => {
                console.log("Error" + error)
            }
        )
    }
  )


 
  function onChng(element){
    
   if(element.target.name==='user'){
    setUser(element.target.value)
    
   }
   else if(element.target.name==='password'){
    setPasswod(element.target.value) 
   }
   
  } 
 function SubmitE(){
  console.log(user)
  if(data.id!=null){
    alert("Submit")
  }
  else{
    alert("Invalad Data")
  }
 }
 function onDro(element)
 {
  if(element.target.name==='user'){
    if(verifyusr.id==null){
      setVarifyusr("Enter Valid Username")
    }
   }
   else if(element.target.name==='password'){
    if(data.id==null){
      setVerifypass("Enter Valid Password")
    }
   }
  
 }
 function fns(){
  if(verifyusr.id==null){
    setVarifyusr("Enter Valid Username")
  }
 }
  return (      
    <div>
   
        <form onSubmit={SubmitE}>
            
            <label >Username:</label>
            <input type='text' placeholder='Enter Text' name='user' id='usname' onChange={onChng} onBlur={onDro}/><br/><br/>
            <span>{usrvr}</span>
            <br></br> 
            <label>Password</label>
            <input type='password' name='password' placeholder='Enter Passeord'onChange={onChng} onBlur={onDro} onClick={fns}/><br/><br/>
            <span>{verifypass}</span><br></br>
            <input type='submit' value={'Login'}/>
          
        </form>
        <h1>{ JSON.stringify(data) }</h1>
        <h1>{JSON.stringify(verifyusr)}</h1>
       
        <h1>{user}</h1>
        <h1>{password}</h1>
     
       
       
      </div>
    
  )
}

