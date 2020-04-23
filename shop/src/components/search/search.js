// import React from "react";
// import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import './style.css'

// const Search = () => {
//   return (
//     <MDBCol md="ok">
//     <MDBFormInline className="md-form mr-auto mb-4">
//       <input className="bar" type="text" placeholder="Search" aria-label="Search" />
//       <MDBBtn type="submit" className="mr-auto">
//         Search
//       </MDBBtn>
//       </MDBFormInline>
//       </MDBCol>
//   );
// }

// export default Search;


import React ,{ useState  , useEffect} from 'react';
import axios from 'axios';

export default function Search() {
    const [data ,setData] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState("");

    useEffect(()=>{
            const fetchData = async ()=> {
                    try{
                        const res = await axios.get('https://ga-project3-backend.herokuapp.com/api/items');
                        setData(res.data);
                        setFilterd(res.data);
                    }catch(err){
                        throw new Error(err);
                    }
                     };
                  fetchData(); 
        },[]);

        useEffect(()=> {
            const results = filtered.filter(res=> res.item.includes(result)

            ); 
            setData(results)
        } ,[result])
        //console.log(data)

      const onChange =(e)=> {
            setResult(e.target.value);
        }

    return (
        <div>
        <input 
            type="text"
            placeholder="serch here .."
            value={result}
            onChange={onChange}
        />
        {data.map((r,i)=> (   
                <ul key={i}>
                <li>{r.item}</li>
                </ul>)
            )
        }
    </div>
    )  
}