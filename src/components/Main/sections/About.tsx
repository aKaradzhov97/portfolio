import Title from '@components/Title';
import { JOB_TITLE, OWNER_EMAIL, OWNER_NAME, OWNER_PHONE } from "@constants";

export const AboutSection = () => {
  return (
    <>
      <Title level="2" underlined>
        About
      </Title>
      <p>
        Hi! I’m {OWNER_NAME}, an enthusiastic and passionate {JOB_TITLE}{' '}
        who enjoys developing innovative solutions to online problems, and to
        design and implement beautiful, accessible, websites with more focus on
        the frontend because I really appreciate a good design with great
        performance and I am seeing it’s importance more than ever in today’s
        apps, websites, and products.
      </p>
      <p>
        I am based in Berlin, I was born in 1997 and I graduated from Software
        University (SoftUni) as JavaScript Developer in 2019.
      </p>
      <p>
        Outside of my professional career, I workout and listen to music and
        often enjoy it quite loud.
      </p>

      <h3>Get in touch</h3>
      <p>
        I’m always open to new opportunities and freelance work, so email me if
        you’d like to work together.
      </p>
      <div>
        <a href={`maito:${OWNER_EMAIL}?subject=Hi%20there!`}>
          {OWNER_EMAIL}
        </a>
      </div>
      <div>
        <a href={`tel:${OWNER_PHONE}`}>{OWNER_PHONE}</a>
      </div>
    </>
  );
};
