import React, {Component} from "react";
import {Link} from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger m-3">
          Something went wrong. Try
          <Link to={'/'}> Main page</Link>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
