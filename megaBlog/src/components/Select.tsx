import React, { useId } from "react";

interface SelectProps{
    label: String,
    className: String,
    options: []
}
const Select = ({
    label,
    className,
    options,
    ...props
}:SelectProps,ref:any) => {
    const id = useId();
    return ( 
        <div>
            {label &&
            <label htmlFor={id}>{label}</label>
            }
            <select ref={ref} id={id} {...props} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
                {options?.map((option:any)=>(
                    <option key={option} value={option} >
                        {option}
                    </option>  
                ))}
            </select>
        </div>
     );
}
 
export default React.forwardRef<HTMLSelectElement, SelectProps>(Select);

