import { useEffect } from "react";

export default function useEvent(event, eventHandler) {
    useEffect(() => {
        document.addEventListener(event, eventHandler)
        return () => document.removeEventListener(event, eventHandler)
    }) // TODO1: one time useEffect(() => {}, [])
}
