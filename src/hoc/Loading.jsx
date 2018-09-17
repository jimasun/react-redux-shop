import React, { Component } from 'react'

import './Loading.css'

const defaultState = {
  componentSelector: '',
  loading: true,
  fullScreen: false,
  text: 'loading...'
}

const withLoading = (WrappedComponent, options = defaultState) => {
  class WithLoading extends Component {
    constructor(props) {
      super(props)
      this.state = options
    }

    startLoading() {

    }

    stopLoading() {

    }

    render() {
      return (
        <div>
          <div className="Loading">
            <div className="indicator" />
          </div>
          <WrappedComponent {...this.props}
            startLoading={this.startLoading}
            stopLoading={this.stopLoading} />
        </div>
      )
    }
  }

  WithLoading.displayName = `${getDisplayName(WrappedComponent)}WithLoading`;
  return WithLoading;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withLoading