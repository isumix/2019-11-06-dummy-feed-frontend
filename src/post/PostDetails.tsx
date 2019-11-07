import React from 'react';
import styled from 'styled-components/macro';
import {User} from '../user/user';
import {Post} from './post';
import CommentList from '../comment/CommentList';
import PostItem from './PostItem';

const Container = styled.section`

`;

const PostDetails = ({post, user}: {post: Post, user?: User}) => {
  return (
    <Container>
      <PostItem post={post} user={user} />
      <CommentList postId={post.id} />
    </Container>
  );
};

export default PostDetails;