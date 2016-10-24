import React from 'react';

class Repos extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <div>
        <p>Repos</p>
        <p>{this.props.username}'s REPOS: {this.props.repos}  </p>
      </div>
    )
  }
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array
}

export default Repos;
