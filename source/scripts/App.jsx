import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import customAction from './actions/custom-action';

class App extends Component {
	constructor(props, context) {
		super(props, context);
		Object.assign(this, props, context);
	}

	render() {
		return (
			<div className="messages-container" />
		);
	}
}

function mapStateToProps(state) {
	return {
		customReducer: state.get('customReducer').toJS()
	};
}

function mapDispatchToProps(dispatch) {
	return {
		customAction: bindActionCreators(customAction, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
