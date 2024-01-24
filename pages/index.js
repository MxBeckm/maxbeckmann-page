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
          <p>Master of Applied Geoinformatics </p>
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
        <span>
          Max is currently a master student of applied geoinformatics at the University of Salzburg.
          His favorite study subjects are spatial analysis, remote sensing, neural networks and web development.
          When not online, he loves to bake sourdough bread, take analog pictures or go bouldering. 
        <br></br></span>
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
          <BioYear>03/2019 – 10/2023 - [Work]<br></br></BioYear>
          <span>Employer   : Interuniversity Institution Wissenschaft & Kunst <br></br></span>
          <span>Position  : Web Developer<br></br></span>
          <span>Tasks     : Creation of a web-based map application with Angular and Leaflet, API query and data preparation with Python, data backup and forwarding with PostgreSQL and Geoserver <br></br></span> 
        </BioSection>
        <BioSection>
          <BioYear>03/2020 – 06/2023 - [Work]<br></br></BioYear>
          <span>Employer   : Geosocial Analytics Lab Salzburg<br></br></span>
          <span>Position  : Scientific Research Assistant<br></br></span>
          <span>Tasks     : Spatio-Temporal analysis of geosocial media data, data science, training of large language models, semantic analysis<br></br></span> 
          <span>            Tutor for Practice of Software Development (Java) <br></br></span> 
        </BioSection>
        <BioSection>
          <BioYear>2019 - [Uni]<br></br></BioYear>
          Completed his Bachelor of Engineering in Geovisualisation (THWS).
        </BioSection>
        <BioSection>
          <BioYear>2019 - [Uni]<br></br></BioYear>
          Awards: Esri Award &ldquo;EDC Student of the Year 2019&quot; with Surveillance of Room Occupancy within the Scope of FHWS Campus Information System.
        </BioSection>
        <BioSection>
        <BioYear>05/2019 – 09/2019 - [Work]<br></br></BioYear>
        <span>Employer   : Insitute for Geovisualisation at the Technische Hochschule Würzburg-Schweinfurt <br></br></span>
        <span>Position  : Scientific Research Assistant<br></br></span>
        <span>Tasks     : Assistent for content creation of an E-Learning platform in the scope of the Smart VHB Project.
                      Project supervison of Student Projects (Creation of a VR-Experience around the historic region of the Frauenkirche in Munich ~ Set in the 15. century.)<br></br></span>  
        </BioSection>
        <BioSection>
          <BioYear>10/2017 – 10/2019 [Work]<br></br></BioYear>
          <span>Employer   : Angermeier ING Gmbh<br></br></span>
          <span>Position  : Working Student<br></br></span>
          <span>Tasks     : Surveying, Building Inventory, Laserscanning, 3D Modelling in REVIT, Construction planning in AutoCAD <br></br></span>       
        </BioSection>
        <BioSection>
          <BioYear>10/2016 – 10/2017 [Work]<br></br></BioYear>
          <span>Employer   : geoinform AG<br></br></span>
          <span>Position  : Student Assistant<br></br></span>
          <span>Tasks     :	GNSS-Surveying, Creation of maps using CAD<br></br></span>
        </BioSection>
        <BioSection>
          <BioYear>10/2014 – 05/2015 [Work]<br></br></BioYear>
          <span>Employer   : h&m Würzburg<br></br></span>
          <span>Position  : Sales Advisor<br></br></span>
        </BioSection>
        <BioSection>
          <BioYear>1996</BioYear>
          <span>Born in Würzburg, Germany.<br></br></span>
        </BioSection>
        
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Voluntary Work / Sports
        </Heading>
        <BioSection>
          <BioYear>2023 – present - [Sports]</BioYear>
          <span>Bouldering and Fitness<br></br></span>
        </BioSection>
        <BioSection>
          <BioYear>2019 – 2023 - [Voluntary]</BioYear>
          <span>Institution  : pics4peace e.V.<br></br></span>
          <span>Work         : Moderation and participation in workshops, e.g. &quot;For the freedom of the word&quot;, in street surveys and discussions, e.g. &quot;punsch4peace&quot;, discussion at the Frankfurt Book Fair with Tanja Kinkel and Winfried Muthesius &quot;Against extremism, for democracy&quot;, in films for YouTube, other IT support. <br></br></span>
        </BioSection>
        <BioSection>
          <BioYear>2014 – present - [Sports]</BioYear>
          <span>Volleyball or beach volleyball in my free time<br></br></span>
        </BioSection>
        <BioSection>
          <BioYear>2009 – 2014 - [Sports]</BioYear>
          <span>Volleyball at Röntgengymnasium (school team)<br></br></span>
        </BioSection>
        <BioSection>
          <BioYear>2007 - 2014 - [Sports]</BioYear>
          <span>Keichu Do (Martial Arts), Würzburg<br></br></span>
        </BioSection>
        <BioSection>
          <BioYear>2005 – 2007 - [Sports]</BioYear>
          <span>Athletics/track and field at TG Würzburg/Heidingsfeld<br></br></span>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <span>
          Spatial Science, Deep Learning, Sattelite Imagery, Chess and Toni.
        <br></br></span>
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
