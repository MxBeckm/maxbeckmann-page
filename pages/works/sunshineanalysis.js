import {
  Container,
  Badge,
  Link,
  Box,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage} from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="SunshineAnalysis">
    <Container>
      <Title>
      SunshineAnalysis <Badge>2022</Badge>
      </Title>
      <P>
       A sunshine analysis done on the Mittersill area, in order to figure out houses which are best suited for solar panels.
       The interactive ArcGis Story Map can be found here: 
      </P>
      <Link href="https://storymaps.arcgis.com/stories/18284ee11fc54ba496786055dedff2eb">
      Sunshine Analysis Story Map
      </Link>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Study Area</Center>
      </Heading>
      <WorkImage src="/images/works/sunshine_01.png" alt="Sunshine Analysis"></WorkImage>
      <Box>
      As an area which is famous for skiing and hiking, the Mittersill people recognize the dangers of climate change and want to increase their renewable energy household. To help the people decide if their homes are suitable for photovoltaic panels, the energy potential of the city was calculated. 
      </Box>
      <WorkImage src="/images/works/sunshine_02.png" alt="Sunshine Analysis"></WorkImage>
      The solar radiation for the year 2023 was calculated using the area solar radiation tool. The units of our Energy Potential Mittersill layer are Watt per square meter. The south facing mountain side has, as expected, at lot more energy potential than the north facing one. Generally, the potential of the city seems to be unaffected by the mountains surrounding it.

      <P>Let&apos;s see which rooftops of the Mittersill area have the highest average potential throughout the year.
      </P>
  
      <WorkImage src="/images/works/sunshine_03.png" alt="Sunshine Analysis"></WorkImage>
      <P>The solar radiation ws caclulated per square meter for each roof. The houses have been colored form orange to red depending on their mean solar radiation per square meter.</P>
      <WorkImage src="/images/works/sunshine_04.png" alt="Sunshine Analysis"></WorkImage>
      <P>The to 20 buildings with the highest solar radiation can be seen above. To install solar panels on these houses should proof to be a smart investment.</P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
