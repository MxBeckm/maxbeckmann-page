import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="musicmap">
    <Container>
      <Title>
        MusicMap <Badge>2020</Badge>
      </Title>
      <P>
        The Salzburg music map was developed with close collaboration with the wissenschaft und kunst faculty
        in Salzburg. The map was created by me as part of a study project and resulted in a 2 year long employment to further
        enhance its functionality and provide support. The map is an intersection between socioeconomic data, georeferenced musical events, and an explorative tool to
        provide insights about where, when and which events happen around salzburg city. 
        More information about the map can be found at <a href="https://geosocial.at/music-map/">Geosocial</a>.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="http://human.zgis.at/musicmap/">
            http://human.zgis.at/musicmap/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Angular, Leaflet, Geoserver, Typescript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/MusicMap_01.png" alt="MusicMap" />
      <WorkImage src="/images/works/MusicMap_02.png" alt="MusicMap" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="http://human.zgis.at/musicmap/"
          title="Musicmap"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
