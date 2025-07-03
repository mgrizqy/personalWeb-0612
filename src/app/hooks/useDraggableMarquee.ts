import { useState, useEffect, RefObject } from 'react';

export function useDraggableMarquee(ref: RefObject<HTMLDivElement> | null) {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const marquee = ref?.current;
        if (!marquee) return;

        const onMouseDown = (e: MouseEvent) => {
            setIsDragging(true);
            marquee.classList.add('active-drag'); 
            setStartX(e.pageX - marquee.offsetLeft);
            setScrollLeft(marquee.scrollLeft);
        };
        const onMouseLeaveOrUp = () => {
            setIsDragging(false);
            marquee.classList.remove('active-drag');
        };
        const onMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - marquee.offsetLeft;
            const walk = (x - startX) * 2; 
            marquee.scrollLeft = scrollLeft - walk;
        };

        marquee.addEventListener('mousedown', onMouseDown);
        marquee.addEventListener('mouseleave', onMouseLeaveOrUp);
        marquee.addEventListener('mouseup', onMouseLeaveOrUp);
        marquee.addEventListener('mousemove', onMouseMove);

        return () => {
            marquee.removeEventListener('mousedown', onMouseDown);
            marquee.removeEventListener('mouseleave', onMouseLeaveOrUp);
            marquee.removeEventListener('mouseup', onMouseLeaveOrUp);
            marquee.removeEventListener('mousemove', onMouseMove);
        };
    }, [ref, isDragging, startX, scrollLeft]);

    return isDragging;
}