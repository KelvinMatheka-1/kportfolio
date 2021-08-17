import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Link,
  Icon,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiHeartPulseFill, RiCopyleftLine, RiGithubFill } from 'react-icons/ri'
const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
}

const GetInTouch = () => {
  const miniDesc = useColorModeValue('gray.800', 'gray.400')
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const [ref, inView] = useInView()

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '73%' }}
      height="100%"
      spacing={6}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Say hi!{' '}
        <Text as="span" fontSize="2xl" color={emphasis}>
          <motion.div
            style={{ display: 'inline-block' }}
            variants={rimuruVariant}
            ref={ref}
            animate={inView ? ['shake', 'jump'] : false}
          >
            (⁀ᗢ⁀)
          </motion.div>
        </Text>
      </Heading>
      <Text color={miniDesc}>
        Though, I am fairly introvert myself. I do reply to messages as long as
        my human interaction battery last. Coding, work, movies or even weeb
        stuf, anything is cool. So feel free to message me on any of my social
        media or shoot me an{' '}
        <Link
          href="mailto:marcjhon18@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          email
        </Link>
        .
      </Text>

      <Box
        spacing={0.5}
        textAlign="center"
        color={miniDesc}
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >
        <Link
          color={miniDesc}
          _hover={{
            textDecoration: 'none',
            color: emphasis,
          }}
          rel="noreferrer"
          href="https://github.com/klawingco/kl_portfolio"
          target="_blank"
          _focus={{ boxShadow: 'none' }}
        >
          <Text as="span">
            <Icon as={RiGithubFill} h={6} w={6} /> <br />
            Designed and Made with <Icon as={RiHeartPulseFill} /> <br />
            KL Lawingco <Icon as={RiCopyleftLine} /> 2021
          </Text>
        </Link>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)