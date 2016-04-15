// MODULES //

import Radium from 'radium';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import styles from 'styles';
import getUserData from 'getUserData';


// REACT COMPONENTS //

import Tooltip from 'tooltip';
import FeedbackResponse from 'feedback-response';


// FEEDBACK BUTTONS //

class FeedbackButton extends React.Component {

	constructor( props ) {
		super();

		this.handleClick = ( event ) => {
			let type = props.type;
			switch ( type ) {
			case 'feedback':
				//this.showFeedback();
			break;
			case 'understood':
				this.submitUnderstood();
			break;
			case 'confused':
				this.submitConfused();
			break;
			}
		};

		this.handleMouseOver = ( event ) => {
			let pos = $( ReactDOM.findDOMNode( this ) ).offset()
			ReactDOM.render( <Tooltip left={pos.left-90} top={pos.top+30} text={props.tooltip} />, document.getElementById( 'tooltip' ) );
		};

		this.handleMouseLeave = ( event ) => {
			
		}

	}

	submitConfused() {
		let data = {
			id: this.props.for,
			userID: getUserData().id,
			type: 'confused'
		};
		this.showFeedbackResponse( 'confused' );
		// sendData( data, config );
	}

	submitUnderstood() {
		let data = {
			id: this.props.for,
			userID: getUserData().id,
			type: 'understood'
		};
		this.showFeedbackResponse( 'understood' );
		// sendData( data, config );
	}

	showFeedbackResponse( type ) {
		let responseText;
		let verticalPosition = $(document).scrollTop();
		let w = window.innerHeight;

		switch ( type ) {
			case 'understood':
				responseText = 'Glad to hear that! Thank you for your feedback.';
			break;
			case 'confused':
				responseText = 'We are sorry to hear that. Your feedback helps us to improve the material.';
			break;
			case 'feedback':
			 	responseText = 'Thank you for taking time to share your feedback with us.';
			break;
		}
		ReactDOM.render( <FeedbackResponse top={ verticalPosition + w*0.1 } text={responseText}/>, document.getElementById( 'response' ) );
	}

	render() {
		let type = this.props.type;
		return (
			<div className="feedbackButton" style={ [ styles.icon, styles[type] ] } onClick={this.handleClick}
				onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}></div>
		);
	}
}


// EXPORTS //

export default Radium( FeedbackButton );
