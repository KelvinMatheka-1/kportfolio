import { useState, useEffect, memo } from 'react'
import { Text, Box } from '@chakra-ui/react'

interface TypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

const Typewriter = ({
  words = [
    'Software Engineer',
    'API & Backend Architect',
    'Automation & Playwright Expert',
    'Frontend Integrator',
  ],
  typingSpeed = 90,
  deletingSpeed = 40,
  pauseDuration = 1800,
}: TypewriterProps) => {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) {
      return undefined
    }

    const currentWord = words[index]

    let timeout: NodeJS.Timeout

    if (!isDeleting && subIndex === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseDuration)
    } else if (isDeleting && subIndex === 0) {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
        },
        isDeleting ? deletingSpeed : typingSpeed
      )
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [
    subIndex,
    index,
    isDeleting,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ])

  const currentText = words[index] ? words[index].substring(0, subIndex) : ''

  return (
    <Box as="span" display="inline-flex" alignItems="center">
      <Text as="span">{currentText}</Text>
      <Box
        as="span"
        ml="2px"
        w="2px"
        h="1.2em"
        bg="currentColor"
        display="inline-block"
        sx={{
          '@keyframes blink': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
          animation: 'blink 0.8s infinite',
        }}
      />
    </Box>
  )
}

export default memo(Typewriter)
