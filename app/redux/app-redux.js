import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from ".";

class AppRedux extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let propsCopy = { ...this.props };
    delete propsCopy["children"];

    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { ...propsCopy })
    );

    return <>{childrenWithProps}</>;
  }
}

export default connect(mapStateToProps)(AppRedux);
