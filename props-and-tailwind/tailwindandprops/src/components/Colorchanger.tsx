import { useState } from "react"

const Colorchanger = () => {

    const [color, setColor] = useState("lightgray");
    return (  
        <>
            <div className=" w-3xl  h-96 flex flex-col mt-2" style={{backgroundColor:color}}>
                <h1>Background color changer</h1>
                    <div className="bg-amber-50 w-26 justify-center p-2 block ml-3" >
                        <button
                        onClick={()=>setColor("olive")}
                        className="outline-none rounded-4xl text-black px-1 py-1 mb-1 block w-22 text-center" 
                        style={{backgroundColor:"olive"}}
                        >Olive</button>

                        <button
                        onClick={()=>setColor("lightgreen")}
                        className="outline-none rounded-4xl text-black px-1 py-1 mb-1 block w-22 text-center"  
                        style={{backgroundColor:"lightgreen"}}
                        >Green</button>

                        <button
                        onClick={()=>setColor("lightblue")}
                        className="outline-none rounded-4xl text-black px-1 py-1 mb-1 block w-22 text-center"  
                        style={{backgroundColor:"lightblue"}}
                        >Blue</button>

                        <button
                        onClick={()=>setColor("lightpink")}
                        className="outline-none rounded-4xl text-black px-1 py-1 mb-1 block w-22 text-center"  
                        style={{backgroundColor:"pink"}}
                        >pink</button>

                        <button
                        onClick={()=>setColor("lightyellow")}
                        className="outline-none rounded-4xl text-black px-1 py-1 mb-1 block w-22 text-center"  
                        style={{backgroundColor:"lightyellow"}}
                        >yellow</button>
                    </div>
            </div>
        </>
    )
}

export default Colorchanger