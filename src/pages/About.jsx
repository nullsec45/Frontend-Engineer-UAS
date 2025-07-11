import React from 'react';
import styled from 'styled-components';
import image from "/img/fajar.jpg";

const Container = styled.div`
  font-family: 'Poppins', 'Open Sans', sans-serif;
  color: #073B4C;
  width: 100%;
  padding: 2rem 5vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  overflow-x: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem 3vw;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 25%;
  text-align: center;
  min-width: 250px;

  @media (max-width: 768px) {
    flex-basis: auto;
    min-width: auto;
    margin-bottom: 2rem;
  }
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const Name = styled.h2`
  color:#06D6A0;
  font-size: 1.953rem;
  margin: 0 0 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Title = styled.p`
  color: #64748B;
  margin-bottom: 1rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Institution = styled.p`
  color: #118AB2;
  margin-bottom: 0.25rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1.5rem;
  color: #06D6A0;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const MiddleColumn = styled.div`
  flex-basis: 45%;
  min-width: 400px;

  @media (max-width: 768px) {
    flex-basis: auto;
    min-width: auto;
    margin-bottom: 2rem;
  }
`;

const Heading = styled.h2`
  color:#06D6A0;
  font-size: 2.441rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #64748B;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const RightColumn = styled.div`
  flex-basis: 25%;
  min-width: 250px;

  @media (max-width: 768px) {
    flex-basis: auto;
    min-width: auto;
  }
`;

const SubHeading = styled.h3.withConfig({
  shouldForwardProp: (prop) => prop !== 'top',
})`
  color:#06D6A0;
  font-size: 1.563rem;
  margin-bottom: 0.5rem;
  margin-top: ${props => (props.top ? '2rem' : '0')};

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const List = styled.ul`
  font-size: 1rem;
  padding-left: 1rem;
  color: #64748B;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const BoldText = styled.p`
  font-weight: bold;
  margin-bottom: 0.25rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;


const About = () => {
  return (
    <Container>
      <LeftColumn>
        <ProfileImage
          src={image}
          alt="Nikoloz Sirmpilatze"
        />
        <Name>Rama Fajar</Name>
        <Title>Backend Developer</Title>
        <Institution>STT Terpadu Nurul Fikri</Institution>
        <SocialIcons>
          <a href="https://instagram.com/fjrrm45" target="_blank" rel="noreferrer" aria-label="Twitter" style={{color: '#64748B',fontWeight:'bold'}}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 2.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
          </svg>
          </a>
          <a href="https://www.linkedin.com/in/ramarff/" target="_blank" rel="noreferrer" aria-label="Google Scholar" style={{color: '#64748B', fontWeight:'bold', fontSize:'1.5rem'}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.85-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.269 2.37 4.269 5.455v6.286zM5.337 7.433c-1.144 0-2.07-.926-2.07-2.07 0-1.143.926-2.07 2.07-2.07s2.07.927 2.07 2.07c0 1.144-.926 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.726v20.549C0 23.226.792 24 1.771 24h20.451c.978 0 1.778-.774 1.778-1.726V1.726C24 .774 23.203 0 22.225 0z" />
            </svg>

          </a>
          <a href="https://github.com/nullsec45" target="_blank" rel="noreferrer" aria-label="GitHub" style={{color: '#64748B'}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.725-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.758-1.333-1.758-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.107-.775.42-1.305.762-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.468-2.38 1.235-3.22-.124-.302-.535-1.52.117-3.167 0 0 1.008-.323 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.553 3.285-1.23 3.285-1.23.66 1.647.246 2.865.12 3.167.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.63-5.475 5.925.43.372.81 1.102.81 2.222 0 1.605-.015 2.897-.015 3.293 0 .32.21.7.825.58C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </SocialIcons>
      </LeftColumn>

      <MiddleColumn>
        <Heading>About me</Heading>
        <Paragraph>
          A Web Developer, Backend Engineer, and Junior Web
          Security Penetration Tester with 2 years of experience in
          backend web development. Skilled in using PHP with the
          Laravel Framework, TypeScript with the Nest JS
          Framework, Linux, Nginx, Docker, MySQL, Cron Job, and
          Bash. I am passionate about web development, Linux,
          cybersecurity, and other related fields.
        </Paragraph>
      </MiddleColumn>

      <RightColumn>
        <SubHeading>Interests</SubHeading>
        <List>
          <li>Backend</li>
          <li>Cloud</li>
          <li>DevOps</li>
          <li>Linux</li>
          <li>Cyber Security</li>
        </List>

        <SubHeading top>Education</SubHeading>
        <Paragraph>Bachelor Informatic Engineering</Paragraph>
        <Paragraph>(September 2021 - July 2025)</Paragraph>
        <Institution>STT Terpadu Nurul Fikri</Institution>
      </RightColumn>
    </Container>
  );
};

export default About;
