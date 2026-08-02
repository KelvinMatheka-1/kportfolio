import { memo } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

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
