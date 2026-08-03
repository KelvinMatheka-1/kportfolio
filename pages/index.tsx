/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Grid,
  GridItem,
  Stack,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import OpenGraphHead from 'components/Misc/OpenGraphHead'
import FadeInLayout from 'components/Layout/FadeWhenVisible'
import Menu from 'components/Menu'
import Sidebar from 'components/Sidebar'
import Avatar from 'components/Avatar'
import About from 'components/Sections/About'
import Experience from 'components/Sections/Experience'
import FeaturedWorks from 'components/Sections/FeaturedWorks'
import ScrollMore from 'components/Misc/ScrollMore'
import { Article } from 'types/article'
// These are on bottom sections so no need to render it instantly
const DevToArticles = dynamic(() => import('components/Sections/DevToArticles'))
const GetInTouch = dynamic(() => import('components/Sections/GetInTouch'))

const Portfolio = ({ articles }: { articles: Article[] }): JSX.Element => {
  const sideBarPadding = useBreakpointValue({ base: '5', md: '8', lg: '14' })
  const mainContent = useBreakpointValue({
    base: '5',
    md: '14',
    lg: '14',
    xl: 0,
  })
  const paddTop = useBreakpointValue({ base: '20', sm: 20, md: 20 })
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
        `}
      </Script>
      <OpenGraphHead />
      <Menu />
      <Grid
        id="mainGrid"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(5, 1fr)',
        }}
        templateRows={{
          sm: 'repeat(1, 0)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={4}
      >
        <GridItem
          padding={sideBarPadding}
          marginTop={paddTop}
          rowSpan={2}
          colSpan={{ base: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
          display="flex"
          alignContent="center"
          as="div"
          flexDirection={'row'}
        >
          <Sidebar />
        </GridItem>
        <GridItem
          as="main"
          padding={mainContent}
          rowSpan={2}
          colSpan={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
          overflow="hidden"
        >
          <Stack w="100" spacing={24}>
            <FadeInLayout>
              <Box
                id="aboutMe"
                className="contentRow"
                minH={{ lg: '100vh' }}
                display="flex"
                alignItems="center"
                paddingTop={{ base: 0, lg: 20, xl: 0 }}
                paddingBottom={{ base: 12, lg: 0 }}
                flexDirection={{
                  base: 'column-reverse',
                  lg: 'row',
                }}
              >
                <About />
                <Avatar />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                id="jobs"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 0 }}
                paddingBottom={{ base: 12, lg: 10 }}
                paddingX={0}
                flexDirection={'row'}
              >
                <Experience />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                id="works"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingBottom={{ base: 12, lg: 10 }}
                paddingX={0}
                flexDirection={'row'}
              >
                <FeaturedWorks />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                id="blog"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingBottom={{ base: 12, lg: 10 }}
                paddingX={0}
                flexDirection={'row'}
              >
                <DevToArticles articles={articles} />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                id="contact"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingX={0}
                flexDirection={'row'}
              >
                <GetInTouch />
              </Box>
            </FadeInLayout>
          </Stack>
        </GridItem>
      </Grid>
      <ScrollMore />
    </>
  )
}

const FALLBACK_ARTICLES: Article[] = [
  {
    id: 'fb-1',
    title: 'Building Scalable Web Applications with Next.js & React',
    description:
      'A deep dive into server components, rendering strategies, and optimized client state management.',
    readable_publish_date: 'Aug 1',
    url: 'https://dev.to/t/webdev',
    tag_list: ['webdev', 'react', 'nextjs'],
    reading_time_minutes: 6,
    public_reactions_count: 142,
  },
  {
    id: 'fb-2',
    title: 'Mastering TypeScript: Advanced Type Patterns & Generics',
    description:
      'Learn how to leverage conditional types, template literal types, and type guards to build rock-solid codebases.',
    readable_publish_date: 'Jul 29',
    url: 'https://dev.to/t/typescript',
    tag_list: ['typescript', 'javascript', 'coding'],
    reading_time_minutes: 8,
    public_reactions_count: 98,
  },
  {
    id: 'fb-3',
    title: 'Designing High-Performance CSS Animations & Layouts',
    description:
      'Explore hardware-accelerated transforms, container queries, and subgrid for fluid modern responsive design.',
    readable_publish_date: 'Jul 26',
    url: 'https://dev.to/t/css',
    tag_list: ['css', 'frontend', 'design'],
    reading_time_minutes: 5,
    public_reactions_count: 210,
  },
  {
    id: 'fb-4',
    title: 'The Evolution of Modern Software Engineering & AI',
    description:
      'How modern developer tooling, automated workflows, and AI assistants are shaping the future of web development.',
    readable_publish_date: 'Jul 24',
    url: 'https://dev.to/t/ai',
    tag_list: ['ai', 'webdev', 'future'],
    reading_time_minutes: 7,
    public_reactions_count: 175,
  },
]

export async function getStaticProps() {
  const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000
  const periodIndex = Math.floor(Date.now() / THREE_DAYS_MS)

  let articles: Article[] = []
  try {
    const techTags = [
      'webdev',
      'javascript',
      'react',
      'typescript',
      'ai',
      'programming',
    ]
    const activeTag = techTags[periodIndex % techTags.length]

    const res = await fetch(
      `https://dev.to/api/articles?tag=${activeTag}&per_page=20`
    )
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        // Rotate 4 articles deterministically based on the 3-day period index
        const maxOffset = Math.max(1, data.length - 4)
        const startIndex = (periodIndex * 4) % maxOffset
        articles = data.slice(startIndex, startIndex + 4)
      }
    }
  } catch (err) {
    console.error('Failed to fetch Dev.to articles in getStaticProps:', err)
  }

  if (!articles || articles.length === 0) {
    articles = FALLBACK_ARTICLES
  }

  return {
    props: {
      articles,
    },
    revalidate: 259200, // 3 days ISR revalidation (3 * 24 * 60 * 60 seconds)
  }
}

export default Portfolio
