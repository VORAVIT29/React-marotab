import { useEffect, useRef } from 'react';

export default function UseDebounceEffect(fn, waitTime, deps) {
    const timeoutRef = useRef(null)

    useEffect(() => {
        const handle = () => {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = setTimeout(fn, waitTime)
        }

        if (deps) {
            handle()
        }

        return () => {
            clearTimeout(timeoutRef.current);
        }
    }, deps ? [...deps, fn, waitTime] : [])

    return timeoutRef.current
}