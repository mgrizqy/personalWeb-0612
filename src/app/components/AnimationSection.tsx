'use client';

import { motion } from 'framer-motion';
import { Transition } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

const sectionVariants = {
  
  hidden: { opacity: 0.6, scale: 0.98, y: 50 },
  
  visible: { opacity: 1, scale: 1, y: 0 },
};


const springTransition : Transition<any>   = {
  type: "spring",    
    stiffness: 100,   
    damping: 20,      
    mass: 1,          
    delay: 0.1   
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  animationType?: keyof typeof variants;
}

export default function AnimatedSection({
  children,
  animationType = 'fadeUp'
}: AnimatedSectionProps) {


 const isMobile = useMediaQuery('(max-width: 768px)');

  const viewportSettings = {
    once: false,
  
    amount: isMobile ? 0.2 : 0.65, 
  };


  return (
    <motion.div
      variants={variants[animationType]}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      transition={springTransition}
    >
      {children}
    </motion.div>
  );
}