import { memo, useState, useEffect } from 'react'
import {
  Heading,
  Text,
  Link,
  Stack,
  SimpleGrid,
  Divider,
  Badge,
  Button,
  HStack,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { FaSyncAlt, FaClock, FaHeart, FaExternalLinkAlt } from 'react-icons/fa'
import { Article } from 'types/article'

const formatTags = (tagList: string[]) => {
  if (!Array.isArray(tagList)) {
    return ''
  }
  return tagList
    .slice(0, 3)
    .map((t) => `#${t}`)
    .join(' ')
}

const DevToArticles = ({ articles }: { articles: Article[] }) => {
  const [displayArticles, setDisplayArticles] = useState<Article[]>(articles)
  const [rotationText, setRotationText] = useState<string>('3 days')
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.100')
  const alphaHover = useColorModeValue(
    'rgba(49, 151, 149, 0.08)',
    'rgba(157, 236, 249, 0.08)'
  )
  const badgeBg = useColorModeValue('teal.50', 'whiteAlpha.200')
  const badgeColor = useColorModeValue('teal.700', 'cyan.200')
  const accentColor = useColorModeValue('teal.500', 'cyan.200')

  useEffect(() => {
    setDisplayArticles(articles)

    // Calculate time remaining in current 3-day window
    const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000
    const now = Date.now()
    const msUntilNext = THREE_DAYS_MS - (now % THREE_DAYS_MS)

    const hours = Math.floor(msUntilNext / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)
    const remainingHours = hours % 24

    if (days > 0) {
      setRotationText(`${days}d ${remainingHours}h`)
    } else {
      setRotationText(`${hours}h`)
    }
  }, [articles])

  const handleShuffle = async () => {
    setIsRefreshing(true)
    try {
      const tags = ['webdev', 'javascript', 'react', 'typescript', 'ai', 'css']
      const randomTag = tags[Math.floor(Math.random() * tags.length)]
      const res = await fetch(
        `https://dev.to/api/articles?tag=${randomTag}&per_page=12`
      )
      if (res.ok) {
        const data = await res.json()
        if (Array.isArray(data) && data.length >= 4) {
          const shuffled = [...data].sort(() => 0.5 - Math.random())
          setDisplayArticles(shuffled.slice(0, 4))
        }
      }
    } catch (err) {
      console.error('Failed to shuffle articles:', err)
    } finally {
      setIsRefreshing(false)
    }
  }

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Stack spacing={3}>
        <HStack justify="space-between" align="center" wrap="wrap" spacing={3}>
          <Heading
            size="2xl"
            style={{
              fontVariantCaps: 'small-caps',
            }}
          >
            My current read on tech blogs
          </Heading>
          <Button
            size="xs"
            variant="outline"
            leftIcon={
              <Icon
                as={FaSyncAlt}
                className={isRefreshing ? 'spin-icon' : ''}
              />
            }
            onClick={handleShuffle}
            isLoading={isRefreshing}
            colorScheme="teal"
            borderRadius="full"
            px={3}
          >
            Shuffle Blogs
          </Button>
        </HStack>

        <HStack spacing={2} wrap="wrap">
          <Badge
            bg={badgeBg}
            color={badgeColor}
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight="medium"
            display="flex"
            alignItems="center"
            gap={1.5}
          >
            <Icon as={FaClock} /> Updates every 3 days • Next refresh in{' '}
            {rotationText}
          </Badge>
        </HStack>

        <Text variant="description">
          Curated tech reads & developer insights automatically refreshed every
          3 days!
        </Text>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 8 }}>
        {displayArticles.map((item) => (
          <Link
            aria-label={item.title}
            target="_blank"
            rel="noreferrer"
            key={item.id}
            href={item.url}
            color="currentcolor"
            _hover={{ textDecoration: 'none' }}
            transition="all 0.3s ease"
            role="group"
          >
            <Stack
              spacing={3}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="1em"
              padding={{ base: '1.2em', '2xl': '1.5em' }}
              height="100%"
              transition="all 0.25s ease-in-out"
              backgroundColor={bg}
              position="relative"
              overflow="hidden"
              _hover={{
                background: alphaHover,
                borderColor: accentColor,
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
              }}
              as="article"
            >
              <HStack justify="space-between" align="start">
                <Heading fontSize="larger" paddingX={1} flex="1">
                  {item.title}
                </Heading>
                <Icon
                  as={FaExternalLinkAlt}
                  fontSize="xs"
                  color="gray.400"
                  _groupHover={{ color: accentColor }}
                  transition="color 0.2s ease"
                  mt={1}
                />
              </HStack>

              <Divider borderColor="#A6A6A6" width="95%" opacity={0.6} />

              <Stack spacing={1}>
                <Heading
                  fontSize="small"
                  paddingX={1}
                  variant="accentAlternative"
                >
                  {formatTags(item.tag_list)}
                </Heading>
                <HStack spacing={4} fontSize="smaller" px={1} color="gray.500">
                  <Text variant="description" fontSize="smaller">
                    {item.readable_publish_date}
                  </Text>
                  {item.reading_time_minutes && (
                    <Text
                      fontSize="smaller"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      ⏱️ {item.reading_time_minutes} min read
                    </Text>
                  )}
                  {item.public_reactions_count ? (
                    <Text
                      fontSize="smaller"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <Icon as={FaHeart} color="red.400" fontSize="10px" />{' '}
                      {item.public_reactions_count}
                    </Text>
                  ) : null}
                </HStack>
              </Stack>

              <Text
                fontSize="smaller"
                variant="description"
                paddingX={1}
                noOfLines={3}
              >
                {item.description}
              </Text>
            </Stack>
          </Link>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default memo(DevToArticles)
