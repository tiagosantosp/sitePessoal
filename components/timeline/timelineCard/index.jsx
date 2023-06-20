"use client"
import { useState, useRef, useEffect } from "react";
import "./style.css"

export default function TimelineCard(props) {

    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsIntersecting(entry.isIntersecting);
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);


    return (
        <div className={`${isIntersecting ? 'scale-100' : 'scale-50'} transition-all duration-500 timeline`} ref={ref} >
            <a href="#" className="timeline-content">
                <div className="timeline-icon">{props.children}</div>
                <h3 className="title">{props.titulo}</h3>
                <p className="description">{props.descricao}</p>
                <div className="timeline-year">{props.ano}</div>
            </a>
        </div>
    );
}


