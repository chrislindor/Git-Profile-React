import React from 'react';

class Notes extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    return (
      <div>
        <p>Notes</p>
        <p>NOTES {this.props.notes}</p>
      </div>
    )
  }
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired
}

export default Notes;
