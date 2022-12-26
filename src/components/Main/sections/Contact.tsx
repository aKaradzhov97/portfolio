import { useMediaQuery } from "usehooks-ts";
import { breakpoints } from "@styles";
import Title from '@components/Title';
import Input from '@components/Input';
import Textarea from '@components/Textarea';
import Label from '@components/Label';
import SocialLinks from '@components/SocialLinks';
import { StyledForm, StyledFields, StyledField, StyledButton } from './Contact.styled';

export const ContactSection = () => {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.md})`);

  return (
    <>
      <Title level="2" underlined>
        Contact
      </Title>
      <StyledForm
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <StyledFields>
          <input type="hidden" name="contact-form" value="contact" />
          <StyledField $half={isDesktop}>
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="name" id="name" required={true} />
          </StyledField>
          <StyledField $half={isDesktop}>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" required={true} />
          </StyledField>
          <StyledField>
            <Label htmlFor="message">Message</Label>
            <Textarea name="message" id="message" rows={4} required={true} />
          </StyledField>
        </StyledFields>
        <StyledButton type="submit" inverted>
          Send Message
        </StyledButton>
      </StyledForm>
      <SocialLinks />
    </>
  );
};
