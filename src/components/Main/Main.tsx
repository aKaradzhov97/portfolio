import { ForwardedRef, forwardRef } from 'react';
import { Article, Transition } from '@enums';
import CloseIcon from "@components/Icons/CloseIcon";
import { AboutSection } from './sections/About';
import { SkillsSection } from './sections/Skills';
import { ProjectsSection } from './sections/Projects';
import { ContactSection } from './sections/Contact';
import { StyledMain, StyledPaper, StyledIconButton } from './Main.styled';

type Props = {
  article: string;
  transition: Transition;
  onCloseArticle: () => void;
};
const Main = (
  { article, transition, onCloseArticle }: Props,
  ref: ForwardedRef<HTMLDivElement>
) => {
  let section;
  switch (article) {
    case Article.ABOUT:
      section = <AboutSection />;
      break;
    case Article.SKILLS:
      section = <SkillsSection />;
      break;
    case Article.PROJECTS:
      section = <ProjectsSection />;
      break;
    case Article.CONTACTS:
      section = <ContactSection />;
      break;
    default:
      section = null;
  }

  const isArticleVisible =
    transition === Transition.ARTICLE_TRANSITION ||
    transition === Transition.ARTICLE_VISIBLE;

  return (
    <StyledMain ref={ref} $isVisible={isArticleVisible}>
      <StyledPaper $isActive={transition === Transition.ARTICLE_VISIBLE}>
        {section}
        <StyledIconButton onClick={onCloseArticle}>
          <CloseIcon />
        </StyledIconButton>
      </StyledPaper>
    </StyledMain>
  );
};

export default forwardRef(Main);


