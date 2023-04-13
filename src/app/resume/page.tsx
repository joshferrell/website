import { Box } from '~/components/box';
import { Container } from '~/components/container';
import { CardLink } from '~/components/link';

export const metadata = {
  title: 'Josh Ferrell | Resume',
};

type SectionProps = {
  children: JSX.Element | JSX.Element[];
  title: string;
};

const Section = ({ children, title }: SectionProps) => (
  <section>
    <Box as="h2" variant="subtitle" style={{ marginBottom: '1rem' }}>
      {title}
    </Box>
    {children}
  </section>
);

type ExperienceProps = {
  title: string;
  company: {
    name: string;
    url?: string;
  };
  dates: string;
  summary?: string;
  children?: JSX.Element[] | JSX.Element;
  achievements?: string[];
};

const Experience = ({
  title,
  company,
  dates,
  summary,
  children,
  achievements,
}: ExperienceProps) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <Box as="h3" variant="sectionTitle">
      {title}
    </Box>

    <div>
      {company.url ? <a href={company.url}>{company.name}</a> : company.name}
    </div>
    <div style={{ marginBottom: '.5rem' }}>{dates}</div>

    {summary && <p>{summary}</p>}
    {children}
    {achievements && (
      <ul style={{ listStyle: 'inside', marginLeft: '1rem' }}>
        {achievements.map((x) => (
          <li key={x.slice(0, 20)}>{x}</li>
        ))}
      </ul>
    )}
  </div>
);

const About = () => (
  <Container title="My Resume">
    <CardLink isExternal={true} href="/joshua-ferrell-resume.pdf">
      Download PDF
    </CardLink>
    <section
      style={{ display: 'flex', gap: '1.5rem', flexFlow: 'column nowrap' }}
    >
      <Section title="Profile">
        <p>
          Staff software engineer with 10+ years of experience and expertise in
          React.js, TypeScript, and CSS. Proven technical leader in design
          systems, committed to promoting best practices and guiding teams
          towards impactful work. Passionate about visual design craft,
          mentorship, and fostering collaboration across cross-functional teams.
        </p>
      </Section>
      <Section title="Experience">
        <Experience
          title="Senior Software Engineer II"
          company={{ name: 'Confluent', url: 'https://confluent.io' }}
          dates="November 2021 - February 2023"
          achievements={[
            'Built new design system using TypeScript and React.js, enhancing type-safety for design tokens and IntelliSense for component best practices.',
            'Developed CMS-to-Storybook integration, onboarding 10 designers for direct design system documentation.',
            'Spearheaded Playwright E2E testing, migrating teams from Datadog Synthetics and enabled large-scale data mocking.',
            'Eliminated 800+ accessibility issues; implemented training and regression tests to maintain compliance.',
            'Reduced CI pipeline build time by 20 minutes using test parallelization.',
          ]}
          summary="As part of UI Foundations team, created standards and best practices
          for front-end engineers on event streaming platform. Led design system
          development and component maintenance."
        />
        <Experience
          title="Staff Software Engineer"
          company={{ name: 'GoodLeap', url: 'https://www.goodleap.com' }}
          dates="August 2019 - October 2021"
          summary="Early-hire engineer instrumental in transforming green energy lending business into versatile lending platform, enabling rapid expansion into new markets and customizable loan offerings. Boosted company valuation by $11 billion, while leading and mentoring full-stack development teams."
          achievements={[
            'Built component library used by 20+ developers leveraging React, TypeScript, and Styled Components.',
            'Cut total number of lines of code by 75% by migrating 3 legacy applications to a single Next.js application.',
            'Accelerated time to add new lending products from 4 months to 2 days by creating configuration-based platform.',
            'Implemented unified API for business logic, allowing loan status management across web and mobile apps.',
            'Developed email service with Storybook integration, enabling legal and security teams to effortlessly edit and preview automated customer emails.',
          ]}
        />
        <Experience
          title="Senior Software Engineer"
          company={{
            name: 'Workgroups DaVinci',
            url: 'https://workgroups.com',
          }}
          dates="August 2018 - July 2019"
          summary="Technical lead for design collaboration tool built in React.js and TypeScript that rendered images, pdfs, video, and 3D models and provided annotation tools so customers could provide feedback on their designs. Tool allowed for versioning and file comparison using highlighting of file changes."
          achievements={[
            'Created design collaboration tool in one month to release before major conference.',
            'Collaborated with Adobe engineers to create first TypeScript plugin for Adobe XD.',
            'Modified design collaboration tool for white-labeling by creating JSON file for brand settings and changing UI look.',
            'Developed file conversion tool in 1 month supporting over 450 file types, used AWS SQS and Node.js consumer to transform video formats, optimize images with image pyramiding for deep zoom, and convert word files to PDF.',
          ]}
        />
        <Experience
          title="Software Engineering Consultant"
          company={{ name: 'JFerrell Consulting' }}
          dates="December 2017 - August 2018"
        >
          <ul>
            <li>
              <strong>Learn Health</strong>: Dermatological skincare education
              platform
              <ul style={{ listStyle: 'inside', marginLeft: '1rem' }}>
                <li>
                  Developed React.js component library for medical education
                  platform, promoting reuse, simplifying complexity, and
                  reducing development time by 50%.
                </li>
                <li>
                  Led development of dermatological skin type tool using
                  GraphQL, Node.js, and React to provide tailored skincare
                  routines and product recommendations.
                </li>
              </ul>
            </li>
            <li>
              <strong>VoiceTeach</strong>: Voice interface accessibility company
              <ul style={{ listStyle: 'inside', marginLeft: '1rem' }}>
                <li>
                  Improved user engagement by building online demo allowing
                  voice interaction through website. Used RxJS, React, IBM
                  Watson, and web speech recognition.
                </li>
              </ul>
            </li>
          </ul>
        </Experience>
        <Experience
          title="Senior Software Engineer"
          company={{
            name: 'Western Health Advantage',
            url: 'https://westernhealth.com',
          }}
          dates="September 2016 - December 2017"
          summary="Led technical transformation at health insurance company by introducing microservice architecture and React.js development to 20 engineers and trained staff on Agile and SCRUM best practices by facilitating SCRUM rituals."
          achievements={[
            'Designed and developed component library in React.js allowing developers to use prebuilt accessible and reusable components.',
            'Built billing management for mobile application using React Native.',
            'Designed and implemented new billing architecture and authorization services using microservices and Node.js.',
            'Developed documentation portal for developers to view Swagger REST APIs and database information.',
          ]}
        />
        <Experience
          title="Software Engineer (Intern)"
          company={{
            name: 'Tennessee Valley Authority',
            url: 'https://www.tva.com/',
          }}
          dates="January 2015 - July 2016"
          summary="Collaborated with archeologists and river maintenance teams offering technical support and developing new ArcGIS applications."
          achievements={[
            'Created web application used by 20+ employees allowing maintenance of Native American cultural artifacts.',
            'Automated database migration with ArcMap extension transitioning from Oracle to Microsoft SQL Server.',
            'Modernized legacy Perl web app to ASP.NET MVC, enabling dam and river monitoring near nuclear power plants.',
          ]}
        />
        <Experience
          title="Software Engineer (Intern)"
          dates="June 2015 - August 2015"
          company={{ name: 'FedEx TechConnect', url: 'https://www.fedex.com' }}
          achievements={[
            'Developed inventory tracking web application that scans barcodes to check in and check out computers and equipment using .NET MVC, JavaScript, and Microsoft SQL Server.',
            'Developed and launched project management tool with over 200 users used throughout FedEx TechConnect.',
          ]}
        />
        <Experience
          title="IT Business Analyst (Intern)"
          dates="June 2014 - August 2014"
          company={{ name: 'FedEx', url: 'https://www.fedex.com' }}
          achievements={[
            'As Scrum master, facilitated discussion among customers and product owners. Designed and developed front-end visualization dashboard that shows graphs of shipment information across all operational companies in 2 months.',
            'Created dashboard used for weekly executive presentations and automated previously manual process to generate dashboard, reducing time from 8 hours to instantaneous.',
          ]}
        />
      </Section>
      <Section title="Skills">
        <p style={{ marginBottom: '1rem' }}>
          <strong>Design System Skills:</strong> Progressive Web Applications
          (PWAs), User Interface Design, Mobile Web Design, Accessibility,
          Design Systems, Atomic Design, Design Tokens
        </p>
        <p>
          <strong>Technical Skills:</strong> Node.js, HTML, CSS (Saas, Less),
          CSS-in-JS, JavaScript, TypeScript, React, Redux, Jest, Git, CI
          Pipeline, GraphQL, Amazon Web Services, REST APIs, Playwright, React
          Testing Library, Webpack, Rollup, ESBuild
        </p>
      </Section>
      <Section title="Awards">
        <ul>
          <li>
            <strong>Innovator of the Year</strong>, GoodLeap, 2020
          </li>
          <li>
            <strong>Winning at Work</strong>, Tennessee Valley Authority, 2016
          </li>
          <li>
            <strong>Customer Focus Award</strong>, FedEx, 2014
          </li>
          <li>
            <strong>Director&apso;s Choice Award</strong>, FedEx, 2014
          </li>
        </ul>
      </Section>
      <Section title="Education">
        <p>
          Bachelor of Science in Computer Science
          <br />
          University of Tennessee, Knoxville, 2016
        </p>
      </Section>
    </section>
  </Container>
);

export default About;
