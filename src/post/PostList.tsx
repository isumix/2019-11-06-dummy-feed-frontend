import React from 'react';
import styled from 'styled-components/macro';
import {useJSONPlaceholder} from '../share/useJSONPlaceholder';
import {FadeBottom} from '../share/Fades';
import {Users} from '../user/user';
import {Post} from './post';
import PostItem from './PostItem';

const Container = styled(FadeBottom)`
  height: 4.7em;
  margin: .5em;
  border-radius: 1em;
  padding: .5em;
  background-color: ${({theme: {textBGColor}}) => textBGColor};
`;

export default ({users, setPost}: {users: Users, setPost: React.Dispatch<Post>}) => {
  const posts = useJSONPlaceholder('posts', []);
  return (
    <section>
      {posts.map(
        (post: Post) => (
          <Container key={post.id} onClick={() => setPost(post)}>
            <PostItem post={post} user={users[post.userId]} />
          </Container>
        )
      )}
    </section>
  );
};