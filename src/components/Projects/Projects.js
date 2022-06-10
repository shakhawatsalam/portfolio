import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { useEffect } from 'react/cjs/react.development';


const Projects = () => {
  useEffect(() => {
    AOS.init();
},[])
  
  return ( <Section nopadding id='project'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {
        projects.map(({ id, image, title, description, tags, source, visit }) => (
          <BlogCard  data-aos-anchor-placement="top-bottom"  data-aos="zoom-in" data-aos-duration="3000" key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {
                  tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))
                }
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks key={visit}>Code</ExternalLinks>
              <ExternalLinks key={source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))
      }
    </GridContainer>
  </Section>
  )
};

export default Projects;