import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'

import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Geoinformatics student living in Salzburg!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Max Beckmann
          </Heading>
          <p>Master of Applied Geoinformatics ( Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Max_Beckmann.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Max is currently a master student of applied geoinformatics at the University of Salzburg.
          His favorite study subjects are spatial analysis, remote sensing, neural networks and web development.
          When not online, he loves to bake sourdough bread, take analog pictures or go bouldering. 
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Würzburg, Germany.
        </BioSection>
        <BioSection>
          <BioYear>10/2014 – 05/2015 [Work]</BioYear>
          Eployer   : h&m Würzburg
          Position  : Sales Advisor
        </BioSection>
        <BioSection>
          <BioYear>10/2016 – 10/2017 [Work]</BioYear>
          Eployer   : geoinform AG
          Position  : Student Assistant
          Tasks     :	GNSS-Surveying, Creation of maps using CAD
        </BioSection>
        <BioSection>
          <BioYear>10/2017 – 10/2019 [Work]</BioYear>
          Eployer   : Angermeier ING Gmbh
          Position  : Student Assistant
          Tasks     : Surveying, Building Inventory, Laserscanning, 3D Modelling in REVIT, Construction planning in AutoCAD        </BioSection>
        <BioSection>
          <BioYear>2019 - Work</BioYear>
          Eployer   : Insitute for Geovisualisation at the Technische Hochschule Würzburg-Schweinfurt 
          Position  : Scientific Research Assistant
          Tasks     : Assistent for content creation of an E-Learning platform in the scope of the Smart VHB Project.
                      Project supervison of Student Projects (Creation of a VR-Experience around the historic region of the Frauenkirche in Munich ~ Set in the 15. century.)  
        </BioSection>
        <BioSection>
          <BioYear>2019 - Uni</BioYear>
          Completed his Bachelor of Engineering in Geovisualisation (THWS).
        </BioSection>
        <BioSection>
          <BioYear>2024- Uni</BioYear>
          Expected to complete in the Master&apos;s Program at Z_Gis faculty of the University of Salzburg.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Spatial Science, Deep Learning, Sattelite Imagery and Toni.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/MxBeckm" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @MxBeckm
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/max-beckmann-7641661ba/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Max Beckmann
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
