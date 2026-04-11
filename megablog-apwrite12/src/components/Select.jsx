import React, {useId} from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select 
        {...props}
        id={id}
        ref={ref}
         className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            Note:
        options gives us an array so we have to loop over it, but we have to put conditional check because if options has null value the app will crash.

        {options?.map((option) => {
            <option key={option} value={option}>
                {option}
            </option>
        })}

        </select>
    </div>
  )
}

export default React.forwardRef(Select)