// MODULES //

import Radium from 'radium';
import React from 'react';
import ReactDOM from 'react-dom';

import FeedbackButton from './button.js';
import Tooltip from 'tooltip';
import styles from 'styles';


// FEEDBACK BUTTONS //

class FeedbackButtons extends React.Component {

	constructor( props ) {
		super( props );
	}

	render() {
		const props = this.props;
		const tooltip = this.props.tooltip;
		return (
			<div class="feedbackButtons">
				<div class="fb_line" style={styles.line}>
					<FeedbackButton type="feedback" tooltip="That makes sense." {...props}></FeedbackButton>
					<FeedbackButton type="confused" tooltip="I am confused." {...props}></FeedbackButton>
					<FeedbackButton type="understood" tooltip="I have feedback." {...props}></FeedbackButton>
				</div>
				<div class="clear" style={styles.clear}></div>
				<div id="tooltip"></div>
				<div id="response"></div>
			</div>
		);
	}
}

FeedbackButtons.propTypes = {
	for: React.PropTypes.string.isRequired,
	server: React.PropTypes.string,
	port: React.PropTypes.number,
	clbk: React.PropTypes.func
};

FeedbackButtons.defaultProps = {
	port: 8000,
	clbk: function(){}
};


// EXPORTS //

export default Radium( FeedbackButtons );
