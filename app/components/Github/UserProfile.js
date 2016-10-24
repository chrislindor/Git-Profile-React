import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <div>
        <p>User Profile</p>
        <p>{this.props.username}</p>
        <p>{this.props.bio.name}</p>
      </div>
    )
  }
}

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
}

export default UserProfile;
