import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="masterthesis">
    <Container>
      <Title>
        Master Thesis - Soil sealing <Badge>2023</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Tensorflow, U-Net, ArcGisPro, Gdal</span>
        </ListItem>
      </List>
      <P>
      The mapping of impervious surfaces is crucial to monitor the impact they have on environmental variables such as water quality, water run off capability, soil fertility, biodiversity or the urban heat island effect.
      </P>
      <P>
      The idea of my thesis was to create a deeplearing model trained on very high resolution satellite imagery and opensource label data. The label data generation was automated to increase the usability of the model and make the transferability to different regions easier.
      </P>
      <P>An overview of the workflow can be seen below:</P>
      <WorkImage src="/images/works/thesis_overview.png" alt="Thesis overview diagramm" />
      <P>
      I wanted to see if the automated open-source label data could be sufficient to train a deep learning model capable of accurately classifying sealed soil from satellite imagery. This model was compared to another model I trained using a manually enhanced version of the automated label dataset.
      </P>
      <P>
      As for the neural network, I build a U-net model in Tensorflow, which is inspired by the Ternaus-v2 network.
      </P>
      <WorkImage src="/images/works/Unet.png" alt="Unet" />

      The models where tested on 500 stratified random sample points. The points where split into 10 classes with the first 6 classes representing sealed areas and the next 4 unseald areas.
      <WorkImage src="/images/works/results_table.png" alt="results" />
      The manually enhanced model (Model 2) outperformed or was on par with the automated model in all areas.
      <WorkImage src="/images/works/thesis_comparison.png" alt="results" />
      Finally, to see the applicability of the model, some larger, never-before-seen pieces of satellite imagery were predicted, georeferenced, and finally overlaid in ArcGis Pro.
      <WorkImage src="/images/works/thesis_02.png" alt="results" />
      <WorkImage src="/images/works/thesis_03.png" alt="results" />
      
      I will included a PDF version of my thesis on this website, as soon as it has been reviewed by my professor.
      {/* <AspectRatio maxW="640px"  my={4}>
        	<iframe src="/SoilSealing.pdf" width="100%" height="1500px" />
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
