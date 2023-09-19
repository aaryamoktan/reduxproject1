import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Resume from "./Resume";
function Video(props)
{ 
    return (
        <>
            <div className="apple">
               <form onClick={submit}>
                <input type="text" name="name" id="name"  value={data.name} onChange={onchange} placeholder="name"/>
                <input type="text" name="email" value={data.email} onChange={onchange} placeholder="email"/>
                <input type="text" name="age"   value={data.age} onChange={onchange} placeholder="age"/>
                <button type="submit">Submit</button>
               </form>   
           </div>
        </>
    )
}
export default Video;