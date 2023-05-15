
import { useEffect, useState } from "react";


function App() {

  const[git, setGit] = useState([]);
 const[count, setCount] = useState([]);

  useEffect(()=>{
    fetch ("https://api.github.com/users")
    .then((p1)=> p1.json())
    .then((p2)=>{
      setGit(p2)
      console.log(p2)
    })
  },[])


  return (
    <div> 
      {git.map((item, index)=>
        <li key={index}>
        {item.id}  
        <img src={item.avatar_url} height="50" width="50"/>
        </li>)}
    </div>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

export default App;
