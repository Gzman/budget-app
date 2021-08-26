const { useState, useEffect } = require("react")

const getCurrentWindowSize = () => {
    return {
        vw: window.innerWidth,
        vh: window.innerHeight,
    }
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(getCurrentWindowSize());

    const handleWindowResize = () => {
        setWindowSize(getCurrentWindowSize());
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, []);

    return windowSize;
}

export { useWindowSize }