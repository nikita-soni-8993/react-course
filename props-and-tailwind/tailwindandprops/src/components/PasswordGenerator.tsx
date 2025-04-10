import { useCallback, useEffect, useState, useRef } from "react";

const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState<any>(8);
    const [numAllowed, setNumallowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);

    const passwordRef = useRef<any>(null);
    const passwordGenerator = useCallback(()=>{
        let str="ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrst";
        if(numAllowed) str +="0123456789";
        if(charAllowed) str += "{}!@#$&()";
        let pass = "";
        for(let i=1; i<=length;i++){
            let char =  Math.floor((Math.random() * str.length) + 1);
            pass += str.charAt(char);
        }
         setPassword(pass); 
    }, [length,numAllowed,charAllowed]);

    const copyClipboard = ()=>{

        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    }

    useEffect(()=>{
        passwordGenerator()
    }, [length, numAllowed, charAllowed, passwordGenerator])
    return (  
        <div className="bg-black w-auto p-8 mt-3 justify-center">
            <div className="bg-gray-600 w-full shadow-2xl overflow-hidden p-8  text-orange-400">
            <h1 className="text-white">Password Generator</h1>

                <div className="flex overflow-hidden p-8  rounded-2xl">
                    <input 
                    type="text"
                    ref={passwordRef} 
                    value={password} 
                    placeholder="Password" 
                    className="p-3 outline-none bg-white w-full"
                    readOnly />

                    <button
                    onClick={copyClipboard}
                     className="text-white outline-none px-3 py-0.5" 
                     style={{backgroundColor:"blue"}}
                     >Copy
                     </button>
                </div>

                <div className="text-sm gap-x-2 flex p-8">
                    <div className="flex items-center gap-x-1">
                        <input 
                            type="range"
                            min={6}
                            max={25}
                            value={length}
                            onChange={(e)=> setLength(e.target.value)}
                            className="cursor-pointer"
                            />
                            <label>Length: {length}</label>
                     </div>
                     <div className="flex items-center gap-x-1">
                        <input 
                            type="checkbox" 
                            defaultChecked={numAllowed} 
                            id="numberAllowed" 
                            onChange={()=> setNumallowed((prev)=> !prev)} 
                        />
                        <label>Numbers</label>
                     </div>
                     <div className="flex items-center gap-x-1">
                        <input 
                            type="checkbox" 
                            defaultChecked={charAllowed} 
                            id="charAllowed" 
                            onChange={()=>setCharAllowed((prev)=>!prev)}
                        />
                        <label>Characters</label>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator