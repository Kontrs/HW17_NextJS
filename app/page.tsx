import styles from './page.module.css';
import { Blog } from './components/BlogCard/BlogCard';
import { getCommentData } from './protected/comments/page';

type Blog = {
  _id: string;
  title: string;
  image: string;
  paragraph: string;
  tag: {
    tag: string;
  };
};

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blogs', {
    cache: 'no-store',
  });
  if (!res.ok) {
    console.log(res);
  } else {
    return res.json();
  }
};

const Home = async (): Promise<JSX.Element> => {
  const data = await getData();
  const comments = await getCommentData()

  return (
    <main className={styles.main}>
      {data.map((blog: Blog) => (
        <Blog
          key={blog._id}
          id={blog._id}
          title={blog.title}
          image={blog.image}
          paragraph={blog.paragraph}
          tag={blog.tag.tag}
          isList={true}
        />
      ))}
    </main>
  );
};

export default Home;

