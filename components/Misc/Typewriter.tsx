import { useState, useEffect, memo } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

interface TypewriterProps {
  words?: string[]
  displayDuration?: number
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.25,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.025,
      staggerDirection: -1,
    },
  },
}

const letterVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    filter: 'blur(12px)',
    scale: 0.15,
    y: i % 2 === 0 ? 14 : -14,
    x: i % 3 === 0 ? -8 : i % 3 === 1 ? 8 : 0,
  }),
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    y: 0,
    x: 0,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 150,
    },
  },
  exit: (i: number) => ({
    opacity: 0,
    filter: 'blur(10px)',
    scale: 0.1,
    y: i % 2 === 0 ? -16 : -24,
    x: i % 3 === 0 ? 10 : -10,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  }),
}

const Typewriter = ({
  words = [
    'Software Engineer',
    'API & Backend Architect',
    'Automation & Playwright Expert',
    'Frontend Integrator',
  ],
  displayDuration = 4800,
}: TypewriterProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!words || words.length <= 1) {
      return undefined
    }

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, displayDuration)

    return () => clearInterval(timer)
  }, [words, displayDuration])

  const currentWord = words[index] || ''
  const characters = Array.from(currentWord)

  return (
    <Box
      as="span"
      display="inline-flex"
      alignItems="center"
      position="relative"
      verticalAlign="middle"
      py={0.5}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.span
          key={index}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            display: 'inline-flex',
            position: 'relative',
            whiteSpace: 'pre',
          }}
        >
          {characters.map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              custom={i}
              variants={letterVariants}
              style={{
                display: 'inline-block',
                willChange: 'filter, opacity, transform',
              }}
            >
              <Text as="span">{char}</Text>
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>

      {/* Gentle blinking cursor */}
      <Box
        as="span"
        ml="6px"
        w="2px"
        h="1.1em"
        bg="currentColor"
        borderRadius="full"
        display="inline-block"
        sx={{
          '@keyframes softBlink': {
            '0%, 100%': { opacity: 0.85 },
            '50%': { opacity: 0.15 },
          },
          animation: 'softBlink 1.4s ease-in-out infinite',
        }}
      />
    </Box>
  )
}

export default memo(Typewriter)
