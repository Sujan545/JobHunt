import { useEffect, useState } from "react"

export default function useDebounce<T>(value: T, delay: 300): T {
    const [debouncevalued, setDebounceValued] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValued(value);
        }, delay)

        return () => clearTimeout(handler)
    }, [value, delay])


    return debouncevalued;
}