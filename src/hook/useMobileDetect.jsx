import { useEffect, useState } from 'react';

export const useMobileDetect = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 761);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setScreenSize(width);
            setIsMobile(width < 761);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {
        isMobile,
        screenSize
    };
};
