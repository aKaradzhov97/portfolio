import Title from '@components/Title';
import JSIcon from '@components/Icons/JSIcon';
import TSIcon from '@components/Icons/TSIcon';
import ReactIcon from '@components/Icons/ReactIcon';
import ReduxIcon from '@components/Icons/ReduxIcon';
import AngularIcon from '@components/Icons/AngularIcon';
import NodeJSIcon from '@components/Icons/NodeJSIcon';
import ExpressJSIcon from '@components/Icons/ExpressJSIcon';
import NPMIcon from '@components/Icons/NPMIcon';
import MongoDBIcon from '@components/Icons/MongoDBIcon';
import MySQLIcon from '@components/Icons/MySQLIcon';
import HTMLIcon from '@components/Icons/HTMLIcon';
import CSSIcon from '@components/Icons/CSSIcon';
import BootstrapIcon from '@components/Icons/BootstrapIcon';
import JqueryIcon from '@components/Icons/JqueryIcon';
import RestAPIsIcon from '@components/Icons/RestAPIsIcon';
import SassIcon from '@components/Icons/SassIcon';
import WebpackIcon from '@components/Icons/WebpackIcon';
import GitIcon from '@components/Icons/GitIcon';
import JekyllIcon from '@components/Icons/JekyllIcon';
import DotNetIcon from '@components/Icons/DotNetIcon';
import { StyledSkillsList, StyledSkillItem } from './Skills.styled';
import NGRXIcon from "@components/Icons/NGRXIcon";
import MuiIcon from "@components/Icons/MuiIcon";

export const SkillsSection = () => {
  return (
    <>
      <Title level="2" underlined>
        Skills
      </Title>
      <div>
        <Title level="3">Essential</Title>
        <StyledSkillsList>
          <StyledSkillItem>
            <JSIcon />
          </StyledSkillItem>
          <StyledSkillItem>
            <TSIcon />
          </StyledSkillItem>
          <StyledSkillItem>
            <HTMLIcon />
          </StyledSkillItem>
          <StyledSkillItem>
            <CSSIcon />
          </StyledSkillItem>
        </StyledSkillsList>

        <Title level="3">Frameworks</Title>
        <StyledSkillsList>
          <StyledSkillItem>
            <ReactIcon />
          </StyledSkillItem>
          <StyledSkillItem>
            <AngularIcon />
          </StyledSkillItem>
        </StyledSkillsList>

        <Title level="3">State management</Title>
        <StyledSkillsList>
          <StyledSkillItem>
            <ReduxIcon />
          </StyledSkillItem>
          <StyledSkillItem>
            <NGRXIcon />
          </StyledSkillItem>
        </StyledSkillsList>

        <Title level="3">Popular libraries</Title>
        <StyledSkillsList>
          <StyledSkillItem>
            <MuiIcon />
          </StyledSkillItem>
          <StyledSkillItem>
            <BootstrapIcon />
          </StyledSkillItem>
        </StyledSkillsList>

        <Title level="3">Others</Title>
        <StyledSkillsList>
          <StyledSkillItem>
            <NodeJSIcon/>
          </StyledSkillItem>
          <StyledSkillItem>
            <NPMIcon />
          </StyledSkillItem>
          <StyledSkillItem>
            <GitIcon />
          </StyledSkillItem>
          <StyledSkillItem>
            <ExpressJSIcon/>
          </StyledSkillItem>
          <StyledSkillItem>
            <WebpackIcon />
          </StyledSkillItem>
          <StyledSkillItem>
            <SassIcon />
          </StyledSkillItem>
          <StyledSkillItem>
            <MySQLIcon/>
          </StyledSkillItem>
          <StyledSkillItem>
            <MongoDBIcon/>
          </StyledSkillItem>
          <StyledSkillItem>
            <RestAPIsIcon />
          </StyledSkillItem>
          <StyledSkillItem>
            <JqueryIcon />
          </StyledSkillItem>
          <StyledSkillItem>
            <JekyllIcon />
          </StyledSkillItem>
          <StyledSkillItem>
            <DotNetIcon />
          </StyledSkillItem>
        </StyledSkillsList>
      </div>
    </>
  );
};
