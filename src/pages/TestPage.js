import React,{useEffect,useState} from 'react';
import axios from 'axios';

const TestPage=()=>{
const[posts,setPosts]=useState([]);
useEffect(()=>{
   /* fetch(`http://localhost:8080/api/orders`)
  .then(response => response.json())
  .then(data => console.log(data));
*/
     axios.get(`http://localhost:8080/api/orders`)
    .then(res=>{
        console.log(res.data);
        setPosts(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
})
    return(
       <div>
       {posts.map((post)=><div>{post.businessPartner.mobile}
       <ul>
           {post.products.map((sub)=>
           <li>
               {sub.name}
           </li>
           )}
       </ul>
       
       </div>

       
       )}
       </div>
    )
}
export default TestPage;