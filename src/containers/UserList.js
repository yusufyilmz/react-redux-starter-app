import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import User from 'components/User';
import * as actions from '../actions';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return <User key={user.name} name={user.name} company={user.company} website={user.website} />;
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
}


const mapStateToProps = state => ({
  users: state.user.users
})

export default connect(mapStateToProps, actions)(UserList)
