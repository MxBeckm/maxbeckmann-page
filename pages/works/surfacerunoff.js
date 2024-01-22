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
  <Layout title="Surface Runoff">
    <Container>
      <Title>
      Surface Runoff <Badge>2022</Badge>
      </Title>
      <P>
       A surface runoff analysis done on the Pfarrwerfen area.
       The interactive ArcGis Story Map can be found here: 
      </P>
      <Link href="https://storymaps.arcgis.com/stories/7c56e1c5b5b24d7ab88ed7befdef5f60">
      Surface Runoff Story Map
      </Link>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Study Area</Center>
      </Heading>
        <P>The study area is the Pfarrwerfen catchment area. In this lab, we will compare the catchment area from the "Catchment_Salzburg" layer and the one I created, as well as the differences of filling sinks or not in the DEM that we are using. Flow direction, accumulation and length will be computed to answer further questions about this catchment.
            The transparent blue layer, is the catchment area as defined from the catchment_slazburg layer. 
        </P>
      <WorkImage src="/images/works/surface_01.png" alt="Surface Runoff"></WorkImage>
      <P>
      To generate the products like flow accumulation, flow length and direction the ArcGIS Model Builder was used. 
      </P>
      <P>
      The flow of the model can be seen on the right. First the DEM with a resolution of 10 m gets filled, then the filled DME serves as an input layer for the Flow Direction Tool. The next output is the Flow Direction Raster, which shows in which direction water would flow to.
      </P>
      <P>
      This serves again as an input for the Flow Length, Flow Accumulation, and Watershed Tool. The Watershed tool secondly needs a point or raster input, marking the "flow-to" point. This gives us the true catchment of the area. 
      </P>
      <P>
      The Flow Length Tool gives us a raster showing the downstream flow distance, along the flow path, for each cell.
      </P>
      <P>
      The output of the Flow Length Tool, as well as one or more drop points, are need to run the Cost Path Tool. This shows us how precipitation would drain if it came down on one or more 10 m² square in the dataset.
      </P>
      <P>
      The Flow Accumulation shows how much water flows through each part of the down stream.
      </P>
      <WorkImage src="/images/works/surface_02.png" alt="Surface Runoff"></WorkImage>
    
  
      <WorkImage src="/images/works/surface_03.png" alt="Surface Runoff"></WorkImage>


      <P>The red outline shows the original catchment area, while the blue raster shows the output of our Watershed analysis. 

I was quite surprised, seeing that a rather large portion in the south-west of the research area actually flows into a different catchment. 

The following products were clipped to this new catchment.</P>
      <WorkImage src="/images/works/surface_04.png" alt="Surface Runoff"></WorkImage>
      <P> The Flow Length Tool shows us especially critical areas which are important to the drainage of water.
          Especially the darker areas, purple to red should stay as close to nature as possible. Only areas with enough natural shrubs, trees and greens can give the area enough stability and drainage potential to secure the lower areas from floods. </P>
      <WorkImage src="/images/works/surface_05.png" alt="Surface Runoff"></WorkImage>
      <P>To see which flow lines have at least a 15% flow through of the maximum flow through at the bottom. We can modify the symbology of the Flow Accumulation layer we see on the right. </P>
      <WorkImage src="/images/works/surface_06.png" alt="Surface Runoff"></WorkImage>
      <P>I wanted to see how certain areas in the map would drain if there would only be hevy rainfall on one pixel. 

        Through the cost path tool and some self defined drop point, we are able to check that. The hillshade layer really helps to understand the flow of the water. </P>
        <WorkImage src="/images/works/surface_07.png" alt="Surface Runoff"></WorkImage>
      <P>Let's see how filling the DEM at the start of our model impacts the final products like flow accumulation and length.

The flow direction in this case looks very similar. Of course, it is hard to compare every pixel. Some differences can be clearly seen, in other parts, the shape of the grouped pixel seem to be similar. 

In the first map we have our 8 unique classes as expected. Interestingly, when we don't fill the sinks, we get far more unique classes (24).
      </P>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
