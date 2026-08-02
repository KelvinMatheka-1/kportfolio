import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at freelancing, company projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="CtrlSend"
            src="/works/ctrlsend.png"
            description="CtrlSend is a mobile money service designed to give users complete control over sent funds, stopping fraud, misuse, and accidental transfers by aligning usage with intent."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://ctrlsend.framer.website/"
            objectPosition="center"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="python selenium script"
            description=" Selenium automation script for testing the AutomationExercise website. The script performs various actions including signing in, fetching items, sorting them, adding items to the cart, and placing an order on the website."
            src="/works/Selenium-python.jpg"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/KelvinMatheka-1/selenium-automation-script"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Aura Coffee Web Page"
            description="Aura Coffee web page featuring Playwright scripts for automated end-to-end testing."
            src="/works/aura.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://aura-ruby-eight.vercel.app/"
            objectPosition="center"
            isMobile={isMobile}
          />
        </MotionGridItem>

        {/* <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="What happened!"
            description="the go-to blog for all things tech! Stay updated with the latest developments, insightful analyses, and in-depth reviews from the world of technology. "
            src="/works/tmh.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://what-happened-six.vercel.app/"
            isMobile={isMobile}
          />
        </MotionGridItem> */}
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
