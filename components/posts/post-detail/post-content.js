import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POSTS = {
  title: 'Getting Started with Next Js',
  image: 'getting-started-nextjs.png',
  description: 'NextJs is a good resource.',
  date: '2022-02-10',
  slug: 'getting-started-with-nextJs2',
  content: '# This is a first post',
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POSTS.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
