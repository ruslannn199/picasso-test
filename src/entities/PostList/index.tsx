import { useGetPostsQuery } from './api';
import { Button } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PostsList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data: posts, isLoading } = useGetPostsQuery(page);

  const loadMore = () => {
    if (!isLoading) {
      setPage((prev) => (prev + 1));
    }
  }

  return (
    <>
      {
        posts
          ? (
            posts.data.map(({ id, title, body }, index) => (
              <Link key={index} to={`post/${id}`}>
                <div>
                  <h2>{title}</h2>
                  <p>{body}</p>
                </div>
              </Link>
            ))
          )
          : null
      }
      <Button onClick={loadMore}>Load more</Button>
    </>
  );
}

export default PostsList;
