import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

type PortalProp = {
    children: React.ReactNode
}

function Portal({ children }: PortalProp) {
    const mount = document.getElementById("portal");
    const el = document.createElement("div");

    useEffect(() => {
        mount?.appendChild(el)
    },[])
    return createPortal(children, el)
}

export default Portal
