'use client'
import React, { useRef } from 'react'
import { createContext } from 'react'

export const scrollContext = createContext(null)
const Scroll = ({ children }) => {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const skillRef = useRef(null)
    const experienceRef = useRef(null)
    const educationRef = useRef(null)
    const certificateRef = useRef(null)
    const contactRef = useRef(null)
    return (
        <scrollContext.Provider
            value={{ homeRef, aboutRef, skillRef, experienceRef, educationRef, certificateRef, contactRef }}>
            {children}
        </scrollContext.Provider>
    )
}

export default Scroll