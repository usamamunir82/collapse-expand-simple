import { useState } from 'react'
import './collapse.css'


const Collapse=()=>{
    const collapseData=[
        {
            id:1,
            title:"Hello CLick here",
            content:"Hello my name is usama  I am Software developer to work a web developer"
    
        },
        {
            id:2,
            title:"Hello CLick here2",
            content:"Hello my name is Ali  I am Software developer to work a web developer"
    
        },{
            id:3,
            title:"Hello CLick here3",
            content:"Hello my name is Faisl  I am Software developer to work a web developer"
    
        },
    ]
    const [selected,setSelected]=useState(null)
    const toggle=(i)=>{
        if (selected===i){
            return setSelected(null)
        }
        setSelected(i)

    }



    return(
       <div className='main-container'>
            <div className='accordian'>
              
                {collapseData.map((coldata,i)=>(
                    <div className="item">
                        <div className='title' onClick={()=>toggle(i)}>
                        <h2>{coldata.title}</h2>
                        <span>{selected === i ? "-" : "+"}</span>
                        </div>
                        <div className={selected === i ? "content show" : "content"}>
                        <p>{coldata.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>

       
    )
}
export default Collapse;