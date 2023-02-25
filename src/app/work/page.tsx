import { allWorks } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Image, { StaticImageData } from 'next/image';

import { CardLink } from '~/components/link';
import { WorkCard } from '~/components/card';
import { Container } from '~/components/container';
import { Box } from '~/components/box';
import { Collapse } from '~/components/collapse';

import fedexLogo from '../../../public/fedex.webp';
import goodleapLogo from '../../../public/good-leap.webp';
import tvaLogo from '../../../public/tva.webp';

export const metadata = {
  title: 'Josh Ferrell | Experience',
};

type PropTypes = {
  title: string;
  company: string;
  year: string;
  children: React.ReactNode;
  image: string | StaticImageData;
  defaultOpen?: boolean;
};

const AwardToggle = ({
  title,
  company,
  year,
  children,
  image,
  defaultOpen = false,
}: PropTypes) => {
  const header = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <Image
        src={image}
        alt=""
        aria-hidden={true}
        width={75}
        height={75}
        quality={100}
        placeholder="blur"
        style={{ borderRadius: '100%' }}
      />
      <div>
        <Box color="secondary">
          {company} &#x2022; {year}
        </Box>
        <Box variant="subtitle">{title}</Box>
      </div>
    </div>
  );

  return (
    <Collapse defaultOpen={defaultOpen} header={header}>
      <div style={{ display: 'flex', gap: '1.5rem', flexFlow: 'column' }}>
        {children}
      </div>
    </Collapse>
  );
};

const Work = () => {
  const posts = allWorks
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <Container title="Experience">
      <CardLink isExternal={true} href="/joshua-ferrell-resume.pdf">
        Download my full resume
      </CardLink>
      <section>
        <Box
          as="h2"
          variant="title"
          style={{ textAlign: 'center', padding: '2rem 0' }}
        >
          Awards
        </Box>
        <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
          <AwardToggle
            defaultOpen={true}
            title="Innovator of the Year"
            company="GoodLeap"
            year="2020"
            image={goodleapLogo}
          >
            <p>
              Awarded Innovator of the Year at GoodLeap for outstanding
              contributions to company success. Josh&apos;s work in creating
              scalable architecture solutions with a form generator,
              configurable loan products, scalable API architecture, and a
              comprehensive component library enabled multiple teams to create
              front-end applications with lightning speed.
            </p>
            <p>
              These achievements signifcantly enhanced GoodLeap&apos;s ability
              to provide affordable, sustainable financing options to homeowners
              and also played a pivotal role in the company&apos;s inclusion on
              the Forbes&apos; list of top innovative fintech companies in the
              same year.
            </p>
          </AwardToggle>
          <AwardToggle
            title="Winning at Work"
            company="Tennessee Valley Authority"
            year="2016"
            image={tvaLogo}
          >
            <p>
              Awarded for outstanding contributions to the successful completion
              of the FY15 Integrated Cultural Database Project at TVA. Josh
              created a mapping technology that allows archeologists to track
              and preserve Native American artifacts located in areas of
              cultural significance.
            </p>
          </AwardToggle>
          <AwardToggle
            title="Customer Focus Award"
            company="FedEx"
            year="2014"
            image={fedexLogo}
          >
            <p>
              Awarded for exceptional dedication to ensuring customer
              satisfaction during the development of a groundbreaking dashboard
              at FedEx. The dashboard provides real-time data for FedEx shipment
              numbers and package locations and automated a manual process that
              previously took 8 hours to compile.
            </p>
          </AwardToggle>
          <AwardToggle
            title="Director's Choice"
            company="FedEx"
            year="2014"
            image={fedexLogo}
          >
            <p>
              Awarded for contributions to a 10-week intern project at FedEx.
              This project reduced the time and resources required for manual
              data gathering and analysis and allows FedEx to view shipment
              information in real-time. Awarded by a judging panel of Directors
              who chose the project as best intern project for 2014.
            </p>
          </AwardToggle>
        </div>
      </section>
      {Boolean(posts.length) && (
        <section>
          <Box
            as="h2"
            variant="title"
            style={{ textAlign: 'center', margin: '2rem 0' }}
          >
            Portfolio
          </Box>
          <div>
            {posts.map((post) => (
              <WorkCard
                key={post.slug}
                url={`/work/${post.slug}`}
                title={post.title}
                description={post.summary}
                category={post.category}
                image={{ source: post.image, alt: post.imageAlt }}
              />
            ))}
          </div>
        </section>
      )}
    </Container>
  );
};

export default Work;
