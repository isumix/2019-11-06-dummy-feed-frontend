import React from 'react';
import styled from 'styled-components/macro';
import {useJSONPlaceholder} from '../share/useJSONPlaceholder';
import {Title, Name, Body} from '../share/Components';
import {Comment} from './comment';

const Item = styled.article`
  margin: .5em;
  border: 1px solid silver;
  padding: .5em;
`;

export default ({postId}: {postId: number}) => {
  const comments = useJSONPlaceholder('comments?postId=' + postId, []);
  return (
    <section>
      {comments.map(
        ({id, name, email, body}: Comment) => (
          <Item key={id}>
            <Title>{name}</Title>
            <Name>{email}</Name>
            <Body>{body}</Body>
          </Item>
        )
      )}
    </section>
  );
};