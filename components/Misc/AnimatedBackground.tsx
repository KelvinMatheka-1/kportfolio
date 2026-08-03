import { memo } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

interface StarConfig {
  id: number
  top: string
  left: string
  size: number
  type: 'sparkle' | 'dot' | 'cross'
  duration: string
  delay: string
  maxOpacity: number
  colorType: 'primary' | 'cyan' | 'amber'
}

const STARS: StarConfig[] = [
  { id: 1, top: '8%', left: '12%', size: 12, type: 'sparkle', duration: '5.2s', delay: '0s', maxOpacity: 0.5, colorType: 'primary' },
  { id: 2, top: '15%', left: '45%', size: 3, type: 'dot', duration: '4.1s', delay: '1.2s', maxOpacity: 0.4, colorType: 'cyan' },
  { id: 3, top: '22%', left: '85%', size: 14, type: 'sparkle', duration: '6.5s', delay: '2.5s', maxOpacity: 0.45, colorType: 'amber' },
  { id: 4, top: '35%', left: '28%', size: 2.5, type: 'dot', duration: '3.8s', delay: '0.8s', maxOpacity: 0.35, colorType: 'primary' },
  { id: 5, top: '42%', left: '72%', size: 10, type: 'cross', duration: '5.8s', delay: '3.1s', maxOpacity: 0.4, colorType: 'cyan' },
  { id: 6, top: '55%', left: '8%', size: 14, type: 'sparkle', duration: '4.7s', delay: '1.9s', maxOpacity: 0.5, colorType: 'primary' },
  { id: 7, top: '63%', left: '52%', size: 3, type: 'dot', duration: '6.2s', delay: '0.3s', maxOpacity: 0.4, colorType: 'amber' },
  { id: 8, top: '75%', left: '88%', size: 11, type: 'sparkle', duration: '5.0s', delay: '2.8s', maxOpacity: 0.45, colorType: 'cyan' },
  { id: 9, top: '82%', left: '32%', size: 2.5, type: 'dot', duration: '4.3s', delay: '1.5s', maxOpacity: 0.35, colorType: 'primary' },
  { id: 10, top: '91%', left: '68%', size: 13, type: 'sparkle', duration: '5.9s', delay: '3.5s', maxOpacity: 0.4, colorType: 'amber' },
  { id: 11, top: '5%', left: '65%', size: 2.5, type: 'dot', duration: '4.8s', delay: '2.0s', maxOpacity: 0.35, colorType: 'primary' },
  { id: 12, top: '18%', left: '30%', size: 10, type: 'cross', duration: '5.4s', delay: '0.5s', maxOpacity: 0.4, colorType: 'amber' },
  { id: 13, top: '29%', left: '6%', size: 12, type: 'sparkle', duration: '6.0s', delay: '3.8s', maxOpacity: 0.45, colorType: 'cyan' },
  { id: 14, top: '38%', left: '92%', size: 3, type: 'dot', duration: '4.4s', delay: '1.1s', maxOpacity: 0.4, colorType: 'primary' },
  { id: 15, top: '48%', left: '40%', size: 13, type: 'sparkle', duration: '5.6s', delay: '2.2s', maxOpacity: 0.5, colorType: 'primary' },
  { id: 16, top: '58%', left: '80%', size: 2, type: 'dot', duration: '3.9s', delay: '0.4s', maxOpacity: 0.3, colorType: 'cyan' },
  { id: 17, top: '68%', left: '20%', size: 10, type: 'cross', duration: '6.3s', delay: '1.7s', maxOpacity: 0.45, colorType: 'amber' },
  { id: 18, top: '78%', left: '60%', size: 12, type: 'sparkle', duration: '4.9s', delay: '3.0s', maxOpacity: 0.4, colorType: 'primary' },
  { id: 19, top: '88%', left: '15%', size: 3, type: 'dot', duration: '5.5s', delay: '2.4s', maxOpacity: 0.35, colorType: 'cyan' },
  { id: 20, top: '94%', left: '42%', size: 11, type: 'sparkle', duration: '6.1s', delay: '0.9s', maxOpacity: 0.45, colorType: 'amber' },
  { id: 21, top: '12%', left: '78%', size: 11, type: 'sparkle', duration: '5.1s', delay: '1.3s', maxOpacity: 0.45, colorType: 'primary' },
  { id: 22, top: '25%', left: '60%', size: 2, type: 'dot', duration: '4.6s', delay: '2.7s', maxOpacity: 0.35, colorType: 'cyan' },
  { id: 23, top: '33%', left: '18%', size: 13, type: 'sparkle', duration: '5.7s', delay: '0.2s', maxOpacity: 0.5, colorType: 'amber' },
  { id: 24, top: '46%', left: '85%', size: 9, type: 'cross', duration: '4.2s', delay: '3.3s', maxOpacity: 0.4, colorType: 'primary' },
  { id: 25, top: '52%', left: '22%', size: 3, type: 'dot', duration: '6.4s', delay: '1.6s', maxOpacity: 0.35, colorType: 'cyan' },
  { id: 26, top: '65%', left: '94%', size: 12, type: 'sparkle', duration: '5.3s', delay: '2.9s', maxOpacity: 0.45, colorType: 'primary' },
  { id: 27, top: '72%', left: '38%', size: 2.5, type: 'dot', duration: '4.0s', delay: '0.6s', maxOpacity: 0.35, colorType: 'amber' },
  { id: 28, top: '85%', left: '75%', size: 10, type: 'cross', duration: '5.8s', delay: '2.1s', maxOpacity: 0.4, colorType: 'cyan' },
  { id: 29, top: '3%', left: '35%', size: 12, type: 'sparkle', duration: '6.2s', delay: '1.8s', maxOpacity: 0.45, colorType: 'primary' },
  { id: 30, top: '97%', left: '85%', size: 2, type: 'dot', duration: '4.5s', delay: '3.6s', maxOpacity: 0.3, colorType: 'amber' },
  { id: 31, top: '19%', left: '96%', size: 2.5, type: 'dot', duration: '5.0s', delay: '0.1s', maxOpacity: 0.35, colorType: 'cyan' },
  { id: 32, top: '41%', left: '4%', size: 11, type: 'sparkle', duration: '4.8s', delay: '2.6s', maxOpacity: 0.4, colorType: 'amber' },
  { id: 33, top: '60%', left: '64%', size: 12, type: 'sparkle', duration: '5.6s', delay: '1.0s', maxOpacity: 0.45, colorType: 'primary' },
  { id: 34, top: '71%', left: '5%', size: 2, type: 'dot', duration: '6.0s', delay: '3.4s', maxOpacity: 0.35, colorType: 'cyan' },
  { id: 35, top: '80%', left: '48%', size: 9, type: 'cross', duration: '4.7s', delay: '0.7s', maxOpacity: 0.4, colorType: 'primary' },
  { id: 36, top: '89%', left: '92%', size: 13, type: 'sparkle', duration: '5.4s', delay: '2.3s', maxOpacity: 0.45, colorType: 'amber' },
]

const StarSparkles = () => {
  const primaryColor = useColorModeValue('rgba(13, 148, 136, 0.65)', 'rgba(255, 255, 255, 0.85)')
  const cyanColor = useColorModeValue('rgba(14, 165, 233, 0.65)', 'rgba(103, 232, 249, 0.85)')
  const amberColor = useColorModeValue('rgba(217, 119, 6, 0.6)', 'rgba(253, 224, 71, 0.8)')

  const getColor = (colorType: StarConfig['colorType']) => {
    switch (colorType) {
      case 'cyan':
        return cyanColor
      case 'amber':
        return amberColor
      default:
        return primaryColor
    }
  }

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      pointerEvents="none"
      overflow="hidden"
    >
      {STARS.map((star) => {
        const starColor = getColor(star.colorType)
        return (
          <Box
            key={star.id}
            position="absolute"
            top={star.top}
            left={star.left}
            w={`${star.size}px`}
            h={`${star.size}px`}
            color={starColor}
            pointerEvents="none"
            sx={{
              '@keyframes sparkleTwinkle': {
                '0%, 100%': {
                  opacity: 0.06,
                  transform: 'scale(0.7) rotate(0deg)',
                },
                '50%': {
                  opacity: star.maxOpacity,
                  transform: 'scale(1.2) rotate(25deg)',
                },
              },
              animation: `sparkleTwinkle ${star.duration} ease-in-out infinite ${star.delay}`,
              '@media (prefers-reduced-motion: reduce)': {
                animation: 'none',
                opacity: star.maxOpacity * 0.4,
              },
            }}
          >
            {star.type === 'sparkle' && (
              <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
              </svg>
            )}
            {star.type === 'cross' && (
              <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
                <path
                  d="M12 2v20M2 12h20"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            )}
            {star.type === 'dot' && (
              <Box
                w="100%"
                h="100%"
                borderRadius="full"
                bg="currentColor"
                boxShadow={`0 0 6px ${starColor}`}
              />
            )}
          </Box>
        )
      })}
    </Box>
  )
}

const AnimatedBackground = () => {
  const blob1Bg = useColorModeValue(
    'radial-gradient(circle, rgba(49, 151, 149, 0.18) 0%, rgba(0, 180, 216, 0.08) 50%, transparent 70%)',
    'radial-gradient(circle, rgba(6, 182, 212, 0.16) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%)'
  )

  const blob2Bg = useColorModeValue(
    'radial-gradient(circle, rgba(168, 85, 247, 0.14) 0%, rgba(236, 72, 153, 0.06) 50%, transparent 70%)',
    'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.06) 50%, transparent 70%)'
  )

  const blob3Bg = useColorModeValue(
    'radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, rgba(59, 130, 246, 0.06) 50%, transparent 70%)',
    'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.06) 50%, transparent 70%)'
  )

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      overflow="hidden"
      zIndex={-1}
      pointerEvents="none"
      aria-hidden="true"
    >
      {/* Star Sparkles Overlay */}
      <StarSparkles />

      {/* Blob 1 */}
      <Box
        position="absolute"
        top="-10%"
        left="-5%"
        w={{ base: '350px', md: '600px' }}
        h={{ base: '350px', md: '600px' }}
        bg={blob1Bg}
        filter="blur(60px)"
        sx={{
          '@keyframes float1': {
            '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
            '33%': { transform: 'translate3d(60px, 80px, 0) scale(1.1)' },
            '66%': { transform: 'translate3d(-40px, 40px, 0) scale(0.95)' },
          },
          animation: 'float1 22s ease-in-out infinite',
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      />

      {/* Blob 2 */}
      <Box
        position="absolute"
        bottom="-10%"
        right="-5%"
        w={{ base: '400px', md: '700px' }}
        h={{ base: '400px', md: '700px' }}
        bg={blob2Bg}
        filter="blur(70px)"
        sx={{
          '@keyframes float2': {
            '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
            '33%': { transform: 'translate3d(-70px, -60px, 0) scale(1.05)' },
            '66%': { transform: 'translate3d(30px, -90px, 0) scale(0.9)' },
          },
          animation: 'float2 28s ease-in-out infinite',
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      />

      {/* Blob 3 */}
      <Box
        position="absolute"
        top="40%"
        right="20%"
        w={{ base: '300px', md: '500px' }}
        h={{ base: '300px', md: '500px' }}
        bg={blob3Bg}
        filter="blur(65px)"
        sx={{
          '@keyframes float3': {
            '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(0.95)' },
            '50%': { transform: 'translate3d(-50px, 60px, 0) scale(1.15)' },
          },
          animation: 'float3 25s ease-in-out infinite',
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      />
    </Box>
  )
}

export default memo(AnimatedBackground)

