import FeaturedPost from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

const DUMMY_POSTS = [
  {
    title: 'Getting Started with Next Js',
    image: 'getting-started-nextjs.png',
    description: 'NextJs is a good resource.',
    date: '2022-02-10',
    slug: 'getting-started-with-nextJs',
  },
  {
    title: 'Getting Started with Next Js',
    image: 'getting-started-nextjs.png',
    description: 'NextJs is a good resource.',
    date: '2022-02-10',
    slug: 'getting-started-with-nextJs1',
  },
  {
    title: 'Getting Started with Next Js',
    image: 'getting-started-nextjs.png',
    description: 'NextJs is a good resource.',
    date: '2022-02-10',
    slug: 'getting-started-with-nextJs2',
  },
  {
    title: 'Getting Started with Next Js',
    image: 'getting-started-nextjs.png',
    description: 'NextJs is a good resource.',
    date: '2022-02-10',
    slug: 'getting-started-with-nextJs3',
  },
];

function HomePage(props) {
  return (
    <div>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </div>
  );
}

export default HomePage;
