import React from "react";
import { motion } from "framer-motion";
const container = {
    hidden: {
        y: "200%",
        // color: "#0099c3",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
        y: 0,
        // color: "#000",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
};
const TitleAnimate = ({ children }) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            whileInView={{ opacity: 1 }}
            //   animate={{
            //     x: 0,
            //     y: 0,
            //     scale: 1,
            //     rotate: 0,
            //   }}
            whileHover={{
                scale: 1.2,
                textDecoration: "none",
                textDecorationColor: "var(--color-primary-darker-hover,)",
                // #55ACEE
            }}
            transition={{ ease: "easeOut", duration: 6 }}
        >
            {children}
        </motion.div>
    );
};

export default TitleAnimate;

// how to use title animation

// import { motion } from "framer-motion";


// របៀបទី១
// <Title>
//     <Typography align="center" variant="h5">
//         UPCOMING CLASS
//     </Typography>
// </Title>

// របៀបទី២
// <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
//     <Image height="60" width="60" src={profile} alt="img" />
// </motion.div>


// import { motion, useScroll } from "framer-motion";
// const ScrollStatus = () => {
//   const { scrollYProgress } = useScroll();
//   return <motion.div style={{ scaleX: scrollYProgress }} />;
// };

// export default ScrollStatus;



