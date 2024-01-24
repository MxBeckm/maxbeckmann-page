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
  <Layout title="viewshedAnalysis">
    <Container>
      <Title>
      Viewshed Analysis <Badge>2022</Badge>
      </Title>
      <P>
       A viewshed analysis done on the Mittersill area, in order to figure out which new highrise construction would least impact the landscape of Mittersil.
       The interactive ArcGis Story Map can be found here: 
      </P>
      <Link href="https://storymaps.arcgis.com/stories/0baa9c57173c4e0f9e44ea36c867d84d">
      Viewshed Analysis Story Map
      </Link>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Analysis</Center>
      </Heading>
      <Box>
      A new silo to store crops is planned to be built in the area of Mittersill. We, as the middle man for the construction company, were tasked to give 3 possible building locations, impacting the population the least, to the city counsel of Mittersill. 

<P>It is inevitable that some residents will see the new Silo looking from their roof windows. But our company GeoAnalyitcsAustria plan to find the most suitable locations for the new high-rise construction. </P>

<P>The unit of measurement to see which homes are affected how much will be made available through converting the viewshed raster to point features, then joining and aggregating the point features which intersect the residents homes. This will give us an estimate of how many viewing angles one house posses which intersect with the new build high rise construction. </P>

<P>The buildings which will be included in the analysis are shown in the map below. </P>
      </Box>
      <WorkImage src="/images/works/viewshed_02.png" alt="viewshed Analysis"></WorkImage>
      The new construction will be build at one of the three possible Silo Points. The height of the silo, 50 m, means that it will be visible from multiple locations. To assess how the beautiful view of the landscape would be altered, different view shed scenarios have been calculated.  
      <WorkImage src="/images/works/viewshed_03.png" alt="viewshed Analysis"></WorkImage>
      <WorkImage src="/images/works/viewshed_04.png" alt="viewshed Analysis"></WorkImage>
      <WorkImage src="/images/works/viewshed_05.png" alt="viewshed Analysis"></WorkImage>
      Green building are not affected by the new Silo, while the other buildings are coloured from white to black depending on their degree of being affected. To get a more statistical view of the data, we calculated how many viewshed raster cells fall into each building. If you click on one of the buildings, a chart for each viewshed analysis shows up.
      <WorkImage src="/images/works/viewshed_01.png" alt="viewshed Analysis"></WorkImage>
      Some local checks were made to see if the new Silo would be visible from the council hall as well as the Schlossberg hotel. None of the Silos were visible at either location. 
      <P>When looking at the viewing points of the buildings, the Silo P2 in the west and the Silo P3 in the east are very similarly visible as for the overall amount. The Silo in the South P1 is the one which will be visible from the most buildings.</P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
