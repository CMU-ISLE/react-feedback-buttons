// MODULES //

import Radium from 'radium';
import React from 'react';
import ReactDOM from 'react-dom';

import FeedbackButton from './button.js';
import Tooltip from 'tooltip';
import styles from 'styles';


// FEEDBACK BUTTONS //

class FeedbackButtons extends React.Component {
	/*
	* Create main FeedbackButtons widget.
	*/
	constructor( props ) {
		super( props );
	}

	/*
	* React component render method.
	*/
	render() {
		const props = this.props;
		const tooltip = this.props.tooltip;
		return (
			<div class="feedbackButtons">
				<div class="fb_line" style={styles.line}>
					<FeedbackButton type="feedback" tooltip="I have feedback." {...props}></FeedbackButton>
					<FeedbackButton type="understood" tooltip="Makes sense." {...props}></FeedbackButton>
					<FeedbackButton type="confused" tooltip="I am confused." {...props}></FeedbackButton>
				</div>
				<div class="clear" style={styles.clear}></div>
				<div id="feedbackForm"></div>
				<div id="response"></div>
			</div>
		);
	}
}


// PROPERTY TYPES //

FeedbackButtons.propTypes = {
	for: React.PropTypes.string.isRequired,
	server: React.PropTypes.string,
	port: React.PropTypes.number,
	clbk: React.PropTypes.func
};


// DEFAULT PROPERTIES //

FeedbackButtons.defaultProps = {
	port: 8000,
	clbk: function(){}
};


// EXPORTS //

export default Radium( FeedbackButtons );
