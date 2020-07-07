// Dependencies
import React, { Component } from "react";
import propTypes from "prop-types";

// Assets
class Content extends Component {
  static propTypes = {
    content: propTypes.object.isRequired,
  };
  render() {
    const { content } = this.props;
    return <div className="Content">{content}</div>;
  }
}

export default Content;

