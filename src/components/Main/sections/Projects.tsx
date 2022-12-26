import Title from "@components/Title";
import { StyledProject } from "./Projects.styled";

export const ProjectsSection = () => {
  return (
    <>
      <Title level="2" underlined>Projects</Title>
      <Title level="4">Content coming soon...!!</Title>
      <StyledProject>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/laptop-mockup.png" alt="Laptop" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/google.png" alt="Google project" />
      </StyledProject>
    </>
  );
};
