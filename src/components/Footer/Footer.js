import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel: 111-545-6465-4654'>111-545-6465-4654</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto: skshawon726@gmail.com'>skshawon726@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovating one project at a time
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target={"_blank"} href='https://github.com/shakhawatsalam'>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target={"_blank"} href='https://www.linkedin.com/in/shakhawat-salam-5b1203240/'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target={"_blank"} href='https://github.com/shakhawatsalam'>
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
