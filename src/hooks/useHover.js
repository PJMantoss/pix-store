import {useState, useRef, useEffect} from "react"

function useHover(){
    const [hovered, setHovered] = useState(false);

    const ref = useRef(null);

    const enter = () => {
        setHovered(true);
    }

    const leave = () => {
        setHovered(false);
    }

    useEffect(() => {
        ourRef.current.addEventListener("mouseenter", enter);
        ourRef.current.addEventListener("mouseleave", leave);

        return () => {
            ourRef.current.removeEventListener("mouseenter", enter);
            ourRef.current.removeEventListener("mouseleave", leave);
        }
    }, []);

    return [ourRef, hovered];
}

export default useHover;