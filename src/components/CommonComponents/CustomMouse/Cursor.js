import React from "react";
import "./cursor.css"

class  Cursor extends React.Component{

   


    componentDidMount=()=>{
        window.addEventListener('mousemove',(i)=>{
            // console.log(i)
            const cursor=document.querySelector('.cursor')
            cursor.style.left=`${i.clientX}px`
            cursor.style.top=`${i.clientY}px`
        })



        window.addEventListener('scroll',(i)=>{
            console.log(i)
        })
    }

    render(){
        return(
            <div className="cursor"
            
            >

            </div>
        )
    }
        
    
    
}

export default Cursor;