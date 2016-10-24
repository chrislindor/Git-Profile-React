import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Repos from './Github/Repos.js';
import UserProfile from './Github/UserProfile.js';
import Notes from './Notes/Notes.js';
import ReactFireMixin from 'reactfire'


class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [1, 2, 3],
      bio: {
        name: 'Christopher Lindor'
      },
      repos: ['a', 'b', 'c']
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes  username={this.props.params.username} notes={this.state.notes}/>
        </div>
      </div>
    )
  }
}

export default Profile;
