"use client"
import React, { useEffect } from 'react'

const ModeChecking = () => {
    useEffect(() => {
        const mode = localStorage.getItem("mode")
        if (mode === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [])

    return null;
}

export default ModeChecking