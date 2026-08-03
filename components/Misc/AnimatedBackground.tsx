import { memo } from 'react'
import { Box } from '@chakra-ui/react'
import StarSparkles from 'components/Misc/StarSparkles'

const AnimatedBackground = () => (
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
    <StarSparkles />
  </Box>
)

export default memo(AnimatedBackground)
