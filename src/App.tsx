import React, {useState} from 'react';
import styled from 'styled-components/macro'
import {useJSONPlaceholder} from './share/useJSONPlaceholder';
import {indexUsers} from './user/user';
import {Post} from './post/post';
import PostList from './post/PostList';
import PostItem from './post/PostItem';
import CommentList from './comment/CommentList';

const Info = styled.section`
  height: 100%;
  padding: 1em;
  background-color: ${({theme: {textBGColor}}) => textBGColor};
`;

const App: React.FC = () => {
  const users = useJSONPlaceholder('users', {}, indexUsers);
  const [post, setPost] = useState<Post | null>();
  return (
    <main>
      <div hidden={Boolean(post)}>
        <PostList users={users} setPost={setPost} />
      </div>
      {post &&
        <Info>
          <div>
            <button onClick={() => setPost(null)}>
              <span role="img" aria-label="go back">⬅️</span> Go back
            </button>
          </div>
          <br />
          <PostItem post={post} user={users[post.userId]} />
          <CommentList postId={post.id} />
        </Info>
      }
    </main>
  );
}

export default App;
