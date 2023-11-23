import { useNavigate, useParams } from 'react-router-dom';
import { useGetPostItemsQuery } from './api';
import { Button, Flex, Typography } from 'antd';

const { Title, Text } = Typography;

const PostItem: React.FC = () => {
  const { postId } = useParams();
  const { data: post } = useGetPostItemsQuery(parseInt(postId || '1', 10));
  const navigate = useNavigate();

  return (
    post
      ? (
        <Flex vertical align="center" style={{ padding: "10px 0" }}>
          <Title>{post.title}</Title>
          <Text>{post.body}</Text>
          <Button onClick={() => navigate('/')}>Go back</Button>
        </Flex>
      )
      : null
  );
}

export default PostItem;
