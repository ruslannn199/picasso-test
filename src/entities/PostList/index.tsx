import { useGetPostsQuery } from './api';
import { Button } from 'antd';
import { useState } from 'react';

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
            posts.data.map((post, index) => (
              <div key={index}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))
          )
          : null
      }
      <Button onClick={loadMore}>Load more</Button>
    </>
  );
}

export default PostsList;
