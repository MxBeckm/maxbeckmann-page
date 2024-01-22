import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'

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
          About Me
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
          <BioYear>2024 - [Uni]</BioYear>
          Expected to complete in the Master&apos;s Program at Z_Gis faculty of the University of Salzburg.
        </BioSection>
        <BioSection>
          <BioYear>03/2019 – 10/2023 - [Work]</BioYear>
          <Paragraph>Eployer   : Interuniversity Institution Wissenschaft & Kunst</Paragraph>
          <Paragraph>Position  : Web Developer</Paragraph>
          <Paragraph>Tasks     : Creation of a web-based map application with Angular and Leaflet, API query and data preparation with Python, data backup and forwarding with PostgreSQL and Geoserver </Paragraph> 
        </BioSection>
        <BioSection>
          <BioYear>03/2020 – 06/2023 - [Work]</BioYear>
          <Paragraph>Eployer   : Geosocial Analytics Lab Salzburg</Paragraph>
          <Paragraph>Position  : Scientific Research Assistant</Paragraph>
          <Paragraph>Tasks     : Spatio-Temporal analysis of geosocial media data, data science, training of large language models, semantic analysis</Paragraph> 
          <Paragraph>            Tutor for Practice of Software Development (Java) </Paragraph> 
        </BioSection>
        <BioSection>
          <BioYear>2019 - [Uni]</BioYear>
          Completed his Bachelor of Engineering in Geovisualisation (THWS).
        </BioSection>
        <BioSection>
          <BioYear>2019 - [Uni]</BioYear>
          Awards: Esri Award „EDC Student of the Year 2019" with Surveillance of Room Occupancy within the Scope of FHWS Campus Information System.
        </BioSection>
        <BioSection>
        <BioYear>05/2019 – 09/2019 - [Work]</BioYear>
        <Paragraph>Eployer   : Insitute for Geovisualisation at the Technische Hochschule Würzburg-Schweinfurt </Paragraph>
        <Paragraph>Position  : Scientific Research Assistant</Paragraph>
        <Paragraph>Tasks     : Assistent for content creation of an E-Learning platform in the scope of the Smart VHB Project.
                      Project supervison of Student Projects (Creation of a VR-Experience around the historic region of the Frauenkirche in Munich ~ Set in the 15. century.)</Paragraph>  
        </BioSection>
        <BioSection>
          <BioYear>10/2017 – 10/2019 [Work]</BioYear>
          <Paragraph>Eployer   : Angermeier ING Gmbh</Paragraph>
          <Paragraph>Position  : Working Student</Paragraph>
          <Paragraph>Tasks     : Surveying, Building Inventory, Laserscanning, 3D Modelling in REVIT, Construction planning in AutoCAD </Paragraph>       
        </BioSection>
        <BioSection>
          <BioYear>10/2016 – 10/2017 [Work]</BioYear>
          <Paragraph>Eployer   : geoinform AG</Paragraph>
          <Paragraph>Position  : Student Assistant</Paragraph>
          <Paragraph>Tasks     :	GNSS-Surveying, Creation of maps using CAD</Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>10/2014 – 05/2015 [Work]</BioYear>
          <Paragraph>Eployer   : h&m Würzburg</Paragraph>
          <Paragraph>Position  : Sales Advisor</Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>1996</BioYear>
          <Paragraph>Born in Würzburg, Germany.</Paragraph>
        </BioSection>
        
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Voluntary Work / Sports
        </Heading>
        <BioSection>
          <BioYear>2023 – present - [Sports]</BioYear>
          <Paragraph>Bouldering and Fitness</Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2019 – 2023 - [Voluntary]</BioYear>
          <Paragraph>Institution  : pics4peace e.V.</Paragraph>
          <Paragraph>Work         : Moderation and participation in workshops, e.g. "For the freedom of the word", in street surveys and discussions, e.g. "punsch4peace", discussion at the Frankfurt Book Fair with Tanja Kinkel and Winfried Muthesius "Against extremism, for democracy", in films for YouTube, other IT support. </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2014 – present - [Sports]</BioYear>
          <Paragraph>Volleyball or beach volleyball in my free time</Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2009 – 2014 - [Sports]</BioYear>
          <Paragraph>Volleyball at Röntgengymnasium (school team)</Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2007 - 2014 - [Sports]</BioYear>
          <Paragraph>Keichu Do (Martial Arts), Würzburg</Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2005 – 2007 - [Sports]</BioYear>
          <Paragraph>Athletics/track and field at TG Würzburg/Heidingsfeld</Paragraph>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Spatial Science, Deep Learning, Sattelite Imagery, Chess and Toni.
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
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
