import { useNavigate, useParams } from 'react-router-dom';
import { useGetPostItemsQuery } from './api';
import { Button, Flex, Skeleton, Typography } from 'antd';

const { Title, Text } = Typography;

const PostItem: React.FC = () => {
  const { postId } = useParams();
  const { data: post, isLoading } = useGetPostItemsQuery(parseInt(postId || '1', 10));
  const navigate = useNavigate();

  if (isLoading) return (
    <Flex vertical gap={5} style={{ padding: "10px 0" }}>
      <Skeleton.Input active style={{ height: "46px", margin: "25.46px 0 19px", width: "100%" }} />
      <Skeleton.Input active style={{ height: "22px", width: "100%" }} />
      <Skeleton.Button style={{ width: "82px" }} active />
    </Flex>
  );

  return (
    post
      ? (
        <Flex vertical justify="center" align="flex-start" style={{ padding: "10px 0" }} gap={5}>
          <Title>{post.title}</Title>
          <Text>{post.body}</Text>
          <Button onClick={() => navigate(-1)}>Go back</Button>
        </Flex>
      )
      : null
  );
}

export default PostItem;
