import { useTypedSelector } from '@/app/store';
import { useGetPostsQuery } from './api';
import { useEffect } from 'react';
import { setPosts } from './model/slice';
import { useDispatch } from 'react-redux';

const PostsList: React.FC = () => {
  const { items, currentPage } = useTypedSelector((state) => (state.posts));
  const dispatch = useDispatch();
  const { data } = useGetPostsQuery(currentPage, {
    selectFromResult: ({ data }) => ({
      ...data,
      data: data?.data.length ? data.data : [],
      hasNextPage: Number(data?.amount) - 10 * currentPage > 0,
    }),
  });

  useEffect(() => {
    dispatch(setPosts(data));
    console.log('dispatch');
  }, [data, dispatch]);

  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}

export default PostsList;
