import AllPosts from '../../components/posts/all-posts';
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
const AllBlogsCategory = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllBlogsCategory;
