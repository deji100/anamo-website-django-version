"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"

const SlideX = ({children, x_axis_start=300, x_axis_end=0, direction, delay=.25, overfl}) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls])

  return (
    <div ref={ref} className="ele-container" style={{position: "relative", overflowY: "hidden", overflowX: overfl ? "none" : "hidden"}}>
        <motion.div
        variants={{
            hidden: {opacity: 0, x: direction === "right" ? -(x_axis_start) : x_axis_start},
            visible: {opacity: 1, x: direction === "right" ? -(x_axis_end) : x_axis_end}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 1, delay: delay}}
        >
            {children}
        </motion.div>
    </div>
  )
}

export default SlideX