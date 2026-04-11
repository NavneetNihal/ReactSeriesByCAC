import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    // let authValue = authStatus === true ? true : false

    useEffect(() => {
        // for home page, he types: <Protected authentication={true}> so left side is true and if authstatus is false and it ask false !== (is not equal to true that means authentication) which is false so it skips and goes to else if situation.
        // here is a mathematical solution
        // true && false !== true
        // true && false so it skips it. this is the scenerio where it doesn't execute.
        if (authentication && authStatus !== authentication) {
            navigate("/login")
            // for login page, he types: <Protected authentication={false}> 
            // here is a mathematical solution
            // !authentication && authstatus !== authentication
            // !false && true !== false
            // not false becomes true && true !== false
            // true && true because true !== false means true so it executes. this is the scenerio where it execute.
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])


    return loader ? <h1>Loading...</h1> : <>{children}</>
}

