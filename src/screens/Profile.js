import React, { Component } from 'react';
import Header from '../common/Header';


class Profile extends Component {
    render() {
        return (
            <div>
                <Header baseUrl={this.props.baseUrl} />
                Profile Page
                </div>

        )
    }
}

export default Profile;