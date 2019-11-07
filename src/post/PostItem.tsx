import React from 'react';
import styled from 'styled-components/macro';
import {FadeRight} from '../share/Fades';
import {Title, Name, Body} from '../share/Components';
import {User} from '../user/user';
import UserImage from '../user/UserImage';
import {Post} from './post';

const Container = styled.article`
  display: flex;
`;

const Content = styled.section`
  overflow: hidden;
  margin-left: 0.5em;
`;

const PostItem = ({post: {title, body}, user}: {post: Post, user?: User}) => (
  <Container>
    <section>
      <UserImage user={user} />
      <FadeRight><Name>{user ? user.username : 'user'}</Name></FadeRight>
    </section>
    <Content>
      <FadeRight as="header"><Title>{title}</Title></FadeRight>
      <Body>{body}</Body>
    </Content>
  </Container>
);

export default PostItem;