import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMusicmap from '../public/images/works/MusicMap_01.png'
import thumbSunshineAnalysis from '../public/images/works/SunshineAnalysis_01.png'
import thumbProximity from '../public/images/works/proximity_01.png'
import thumbESDA from '../public/images/works/ESDA_01.png'

import thumbSurfaceRunoff from '../public/images/works/surfacerunoff_01.png'
import thumbViewShed from '../public/images/works/viewshed_01.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="musicmap" title="musicmap" thumbnail={thumbMusicmap}>
            An interactive visualization of music events in salzburg city. 
          </WorkGridItem>
        </Section>

        

        <Section delay={0.1}>
          <WorkGridItem
            id="proximity"
            title="proximity"
            thumbnail={thumbProximity}
          >
            A proximity index toolbox for ArcGis Pro.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="esda" thumbnail={thumbESDA} title="esda">
            An exploratory spatial data analysis notebook. Visualizing spatio-temporal data in one click.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          ArcGis Pro Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem
            id="sunshineanalysis"
            title="sunshineanalysis"
            thumbnail={thumbSunshineAnalysis}
          >
            Sunshine Analysis on the Mittersill area in Austria.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="surfacerunoff"
            thumbnail={thumbSurfaceRunoff}
            title="Surface Runoff"
          >
            A surface runoff analysis of the Pfarrwerfen area.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="viewshed" thumbnail={thumbViewShed} title="Viewshed Analysis">
            A viewshed analysis done on the Pfarrwerfen area. Calculating how new high-rise constructions change the landscape.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
