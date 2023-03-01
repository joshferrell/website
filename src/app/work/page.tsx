import { allWorks, allAwards, allTestamonials } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

import { CardLink } from '~/components/link';
import { WorkCard } from '~/components/card';
import { Reference } from '~/components/reference';
import { Container } from '~/components/container';
import { Box } from '~/components/box';
import { AwardToggle } from '~/components/award';

import style from './work.module.scss';

export const metadata = {
  title: 'Josh Ferrell | Experience',
};

const Work = () => {
  const posts = allWorks
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  const awards = allAwards
    .filter((x) => !x.isHidden)
    .sort((a, b) => b.year - a.year);

  return (
    <Container title="Experience" fullWidth={true}>
      <CardLink isExternal={true} href="/joshua-ferrell-resume.pdf">
        Download my full resume
      </CardLink>
      {Boolean(posts.length) && (
        <section>
          <Box
            as="h2"
            variant="title"
            style={{ textAlign: 'center', margin: '2rem 0' }}
          >
            Portfolio
          </Box>
          <div className={style.portfolioList}>
            {posts.map((post) => (
              <WorkCard
                blurUrl={post.blurUrl}
                key={post.slug}
                url={`/work/${post.slug}`}
                title={post.title}
                description={post.summary}
                category={post.category}
                company={post.company}
                image={{ source: post.image, alt: post.imageAlt }}
              />
            ))}
          </div>
        </section>
      )}
      <section>
        <Box
          as="h2"
          variant="title"
          style={{ textAlign: 'center', padding: '2rem 0' }}
        >
          References
        </Box>
        <div className={style.referenceList}>
          {allTestamonials.map(({ body, ...ref }) => (
            <Reference key={ref.name} code={body.html} {...ref} />
          ))}
        </div>
      </section>
      <section>
        <Box
          as="h2"
          variant="title"
          style={{ textAlign: 'center', padding: '2rem 0' }}
        >
          Awards
        </Box>
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            flexDirection: 'column',
            margin: '0 auto',
            maxWidth: '40.5rem',
          }}
        >
          {awards.map(({ body, isHidden, ...awardProps }) => (
            <AwardToggle
              key={awardProps.name}
              code={body.html}
              {...awardProps}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Work;
