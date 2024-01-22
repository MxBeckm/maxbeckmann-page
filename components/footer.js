import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Max Beckmann. All Rights Reserved. Thanks at <a href="https://www.craftz.dog">Takuya Matsuyama</a> for inspiration.
    </Box>
  )
}

export default Footer
