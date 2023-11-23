import { useGetPostsQuery } from './api';
import { Button, Flex, Spin, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInfiniteScroll from 'react-infinite-scroll-hook';

const { Title, Paragraph } = Typography;

const PostsList: React.FC = () => {
  const [page, setPage] = useState(parseInt(sessionStorage.getItem('page') || '1', 10));
  const { data: posts, isLoading } = useGetPostsQuery(page);
  const hasNextPage = Math.floor((posts?.amount || 0) - page * 10) > 0;

  useEffect(() => {
    window.onbeforeunload = () => {
      sessionStorage.setItem('page', '1');
    };
    return () => {
      window.onbeforeunload = null;
    };
  }, [])

  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore: () => {
      if (!isLoading) {
        sessionStorage.setItem('page', `${page + 1}`);
        setPage((prev) => (prev + 1));
      }
    },
    rootMargin: '0px 0px 400px 0px',
    // You can set delay even higher if you think that this is not enough
    delayInMs: 500,
  });

  if (isLoading) return <Spin size="large" fullscreen />;
  if (!posts) return null;

  return (
    <Flex vertical align="flex-start">
      {
        posts.data.map(({ id, title, body }, index) => (
          <Flex ref={sentryRef} key={index} vertical style={{ width: "100%" }}>
            <Title level={3}>#{id} {title}</Title>
            <Paragraph ellipsis={{ expandable: true }}>{body}</Paragraph>
            <Link to={`post/${id}`}>
              <Button>Show</Button>
            </Link>
          </Flex>
        ))
      }
    </Flex>
  );
}

export default PostsList;
