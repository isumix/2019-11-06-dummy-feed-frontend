import React from 'react';
import styled from 'styled-components/macro';
import {User} from './user';

const Container = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  width: 2em;
  height: 2em;
  line-height: 2em;
  text-align: center;
  vertical-align: middle;
  background-color: ${({user}: {user?: User}) => user ? user.primaryColor : 'silver'};
  color: ${({user}: {user?: User}) => user ? user.secondaryColor : 'white'};
  border-radius: 50%;
`;

export default ({user}: {user?: User}) => (
  <div><Container user={user}>{user ? user.username.substr(0, 2) : 'Us'}</Container></div>
);
