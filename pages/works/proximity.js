import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="proximity">
    <Container>
      <Title>
        Proximity Index <Badge>2021</Badge>
      </Title>
      <P>
        An ArcGis Toolbox for calculating proximity indices. The toolbox is hosted by Prof. Tide on <a href="https://github.com/dtiede/ProximityIndex_Toolbox">Github</a>.

      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Arcpy, ArcGis Pro</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Whats it about</Center>
      </Heading>
      <P>
      Calculate four different proximity indices in ArcGIS Pro. The indices are implemented in a ArcGIS Pro Python Toolbox (*.pyt).
      </P>
      <P>
      PX92: GUSTAFSON, E.J. & G. PARKER (1992): Relationship between landcover proportion and indices of landscape spatial pattern. Landscape Ecology, 7, 101–110.
      </P>
      <P>
      PX94: GUSTAFSON, E.J. & G. PARKER (1994): Using an index of habitat patch proximity for landscape design. Landscape and Urban Planning, 29, 117–130.
      </P>
      
      <P>
      PX fragstats: MCGARIGAL, K. (2015): Fragstats Metrics (Fragstats Documentation). 
      <Link href="https://www.umass.edu/landeco/research/fragstats/documents/fragstats.help.4.2.pdf">
            Umass website <ExternalLinkIcon mx="2px" />
          </Link> (03/2020).
          </P>
      <P>
      PXpt: Similar to PX92, but instead of the target patch area, the focal patch area is included in the index (e.g. used if the arrangement around a patch is remodelled and the influence on the focal patch should be evaluated)


      </P>
      <WorkImage src="/images/works/proximity_01.jpeg" alt="proximity" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
