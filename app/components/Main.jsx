import React from 'react';
import UserIndex from './users/UserIndex';
import UserCreate from './users/UserCreate';
import UserEdit from './users/UserEdit';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentViewMode: 'index',
      userId: null
    }
    this.changeViewMode = this.changeViewMode.bind(this);
  }

  changeViewMode(mode, userId) {
    this.setState({ currentViewMode: mode });

    if(userId !== undefined) {
      this.setState({ userId: userId });
    }
  }

  render() {
    var modeComponent = <UserIndex changeViewMode={this.changeViewMode} />;

    switch(this.state.currentViewMode) {
      case "index":
        break;
      case "create":
        modeComponent = <UserCreate changeViewMode={this.changeViewMode} />;
        break;
      case "edit":
        modeComponent = <EditUser userId={this.state.userId}
                                  changeViewMode={this.changeViewMode}
                        />;
        break;
      default:
        break;
    }
    return modeComponent;
  }
}
