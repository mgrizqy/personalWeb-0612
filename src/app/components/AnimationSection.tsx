// components/AnimatedSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Transition } from 'framer-motion';

// --- Animation Variants ---
const variants = {
  // A gentle fade-in from below
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  // A more dramatic scale-in
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};



// --- Spring Transition (for physics-based animation) ---
const springTransition : Transition<any>   = {
  type: "spring",
  stiffness: 100, // Adjust for more/less "springiness"
  damping: 20,    // Adjust for more/less "bounce"
  duration: 0.8,
};

// --- Component Props ---
interface AnimatedSectionProps {
  children: React.ReactNode;
  animationType?: keyof typeof variants;
}

export default function AnimatedSection({
  children,
  animationType = 'fadeUp' // Default to the fadeUp animation
}: AnimatedSectionProps) {
  return (
    <motion.div
      variants={variants[animationType]}
      initial="hidden"
      whileInView="visible"
      // This makes the animation repeat every time it enters the viewport
      viewport={{ once: false, amount: 0.2 }}
      transition={springTransition}
    >
      {children}
    </motion.div>
  );
}