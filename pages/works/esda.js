import {
  Container,
  Badge,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="esda">
    <Container>
      <Title>
      Exploratory Spatial Data Analysis <Badge>2021</Badge>
      </Title>
      <P>
       The ESDA notebook is a way to simply visualize spatio-temporal data. The main datasource that it was developed for was geolocated teweets.
       But it will work with all kinds of point data that can be sorted by time.
      </P>
      <P>
        The main functions of the notebook are:
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <span>Visualization of a timeline sorted by tag/keyword/variable </span>
        </ListItem>
        <ListItem>
          <span>Common Metrics - mean, standard diviation, </span>
        </ListItem>
        <ListItem>
          <span>Interactive Heatmap</span>
        </ListItem>
        <ListItem>
          <span>Berttopic</span>
        </ListItem>
        <ListItem>
          <span>latent dirichlet allocation</span>
        </ListItem>
        <ListItem>
          <span>Wordcloud</span>
        </ListItem>
      </List>

      

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Jupyter</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Jupyter Notebooks, geopandas, keplergl, semantic analysis, hotspot</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/esda_01.png" alt="ESDA" />
      <WorkImage src="/images/works/esda_02.png" alt="ESDA" />
      <WorkImage src="/images/works/esda_03.png" alt="ESDA" />
      <WorkImage src="/images/works/esda_04.png" alt="ESDA" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
