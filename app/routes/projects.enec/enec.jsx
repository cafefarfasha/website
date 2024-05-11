import enecStats from '~/assets/enec-stats.jpg';
import enecStatsLarge from '~/assets/enec-stats-large.jpg';
import enecStatsPlaceholder from '~/assets/enec-stats-placeholder.jpg';
import enecInner from '~/assets/enec-inner.jpg';
import enecInnerLarge from '~/assets/enec-inner-large.jpg';
import enecInnerPlaceholder from '~/assets/enec-inner-placeholder.jpg';
import genericBackgroundLarge from '~/assets/generic-background-large.jpg';
import genericBackgroundPlaceholder from '~/assets/generic-background-placeholder.jpg';
import genericBackground from '~/assets/generic-background.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { CountTimer } from '~/components/count-timer';
import { Fragment, useState, useEffect, useRef } from 'react';
import { media, classes, cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './enec.module.css';

const title = 'Emirates Nuclear Energy Corporation';
const description = 'The Emirates Nuclear Energy Corporation (ENEC) is the entity responsible for the deployment and ownership of nuclear energy plants in the United Arab Emirates (UAE). ENEC was established to address the country\'s growing demand for electricity while diversifying the nation\'s energy supply and delivering greater energy security.';
const bodytext = 'The Abu Dhabi Science Festival, organized by the Abu Dhabi Technology Committee (TDC) was first held in 2011. The festival features many exhibitions, workshops, shows and signature events, as well as school tours for children around the city. For its second year, we were tasked with developing an engaging, interactive portal filled with science themeed quizzes and mini-games. One challenge given to us: the website portal must be feature complete and compatible with government desktop PCs, which at the time ran Internet Explorer 7. Meeting the client\'s requirements using conventional implementations would have required maintaining dual code bases: one for modern browsers and another for Internet Explorer 7. Through careful study of IE7\'s developer reference as well as a study on contemporary solutions, an roadmap was discovered which will allow the development of a modern UI while maintaining backwards compatibility with Internet Explorer 7. To bridge this gap, our developers used an "attached behavior engine" library - PIE.js - which leverages Internet Explorer\'s DirectX Media API to simulate CSS 3.0 properties. This script allows for the rendering of advanced visual effects such as rounded corners, drop shadows, and gradients, which are otherwise not possible in IE7. The use of PIE.js enabled our developers to maintain a single codebase while ensuring the site looks consistent across all browsers, old and new. We delievered a modern HTML5 website portal with all the requirements achieved. Supporting IE 7.0 was an important requirement\n' +
  'of the client, not finding a solution would have forced the team to cut\n' +
  'back on features in order to meet the client’s required spec.';
const abstract ='A content rich, multi-language website.';
const textureLarge = 'enec-large.jpg';
const texturePlaceholder = 'enec-placeholder.jpg';
const texture = 'enec.jpg';
const texture2 = '';
const texture2Large = '';
const texture2Placeholder = '';
const roles = ['UX Design', 'Interface Design', 'SEO', 'Full Stack Development'];
const initDelay = 300;


export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Enec = () => {
  // const countTimer1Ref = useRef(null);
  // const countTimer2Ref = useRef(null);
  // let countTimerRefs = [countTimer1Ref, countTimer2Ref];
  // const [ visibleProjectSections, setVisibleProjectSections ] = useState([]);

  // useEffect(() => {
  //   const timerSections = countTimerRefs;
  //
  //   const projectObserver = new IntersectionObserver(
  //     (entries, observer) => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           const section = entry.target;
  //           observer.unobserve(section);
  //           if (visibleProjectSections.includes(section)) return;
  //           setVisibleProjectSections(prevSections => [...prevSections, section]);
  //         }
  //       });
  //     },
  //     { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  //   );
  //
  //   timerSections.forEach(timerSection => {
  //     projectObserver.observe(timerSection.current);
  //   });
  //
  //   return () => {
  //     projectObserver.disconnect();
  //   };
  // }, [visibleProjectSections, countTimerRefs]);

  return (
    <Fragment>
      <ProjectContainer className={styles.enec}>
        <ProjectBackground
          src={enecStats}
          srcSet={`${enecStats} 1280w, ${enecStatsLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={enecStatsPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
          url={"https://www.enec.gov.ae/"}
          bodytext={bodytext}
          abstract={abstract}
          texture={texture}
          textureLarge={textureLarge}
          texturePlaceholder={texturePlaceholder}
          texture2={texture2}
          texture2Large={texture2Large}
          texture2Placeholder={texture2Placeholder}
        />


        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`/static/project-assets/${texture} 375w, /static/project-assets/${textureLarge} 1920w`}
              width={375}
              height={814}
              placeholder={`/static/project-assets/${texturePlaceholder}`}
              alt="The ENEC website."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>


        <ProjectSection>
          <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Data rich</ProjectSectionHeading>
                <ProjectSectionText>
                  A requirement for the website, re-usable component blocks that render statistics and numerical information into an easily digestible and attractive format, similar to the concept of infographics in marketing.
                </ProjectSectionText>
              </ProjectTextRow>
              <ProjectTextRow>
                <ProjectSectionColumns className={styles.columns}>
                  <div
                    // ref={countTimer1Ref}
                    style={cssProps({ initDelay: numToMs(initDelay) })}
                  >
                    <div
                      // className={visibleProjectSections.includes(countTimerRefs[0].current) ? styles.countTimer : ""}
                      className={styles.countTimer}
                    >
                      <ProjectSectionHeading>
                        <CountTimer
                          value="658367952"
                          direction="up"
                        />
                      </ProjectSectionHeading>
                      <ProjectTextRow center>
                        GWh of clean electricity
                      </ProjectTextRow>
                    </div>
                  </div>
                  <div
                    // ref={countTimer2Ref}
                    style={cssProps({ initDelay: numToMs(initDelay+200) })}
                  >
                    <div
                      // className={visibleProjectSections.includes(countTimerRefs[1].current) ? styles.countTimer : ""}
                      className={styles.countTimer}
                    >
                      <ProjectSectionHeading>
                        <CountTimer
                          value="230243914"
                          direction="up"
                        />
                      </ProjectSectionHeading>
                      <ProjectTextRow center>
                        Kilotonnes of CO2 prevented
                      </ProjectTextRow>
                    </div>
                  </div>
                </ProjectSectionColumns>
              </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Visualising Information</ProjectSectionHeading>
              <ProjectSectionText>
                A series of layouts were composed to increase impact when conveying sets of data.
              </ProjectSectionText>
            </ProjectTextRow>
                <Image
                  srcSet={`${enecStats} 800w, ${enecStatsLarge} 1920w`}
                  width={800}
                  height={500}
                  placeholder={enecStatsPlaceholder}
                  alt="Visualising concepts"
                  sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
                />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                We successfully realised the client's vision for the website.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${enecInner} 800w, ${enecInnerLarge} 1920w`}
              width={940}
              height={500}
              placeholder={enecInnerPlaceholder}
              alt="ENEC inner page"
            />
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
