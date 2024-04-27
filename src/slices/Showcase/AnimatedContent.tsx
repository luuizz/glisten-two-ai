"use client"
import React from 'react'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import usePrefersReducedMotion from "@/hooks/usePreferReducedMotion"

export default function AnimatedContent({ children, }: {children: React.ReactNode}) {

    const container = useRef(null);
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const prefersReducedMotion = usePrefersReducedMotion();

    useGSAP(() => {
        if (prefersReducedMotion) {
            gsap.set(container.current, { y: 0 });
            return;
          }
        gsap.fromTo(container.current, {y:100}, {
            y: 0,
            ease: "power2.inOut",
            duration: 1,
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom-=40%",
                toggleActions: "play pause resume reverse",
            }
        })
    }, {scope: container })

  return <div ref={container}>{children}</div>
}
