import { useState, useEffect } from "react"
import useAuth from "./useAuth"
import axios from "axios"

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    useEffect(()=> { 
        return accessToken 
    })
}
