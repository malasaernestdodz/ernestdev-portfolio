import { motion, MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Stagger({
  children,
  className,
  delay = 0,
  testId,
}: {
  children: ReactNode
  className?: string
  delay?: number
  testId?: string
}) {
  return (
    <motion.div
      data-testid={testId}
      className={className}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  )
}

export function Item({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}

export function Reveal({
  children,
  className,
  delay = 0,
  testId,
}: {
  children: ReactNode
  className?: string
  delay?: number
  testId?: string
}) {
  return (
    <motion.div
      data-testid={testId}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
