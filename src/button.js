// MODULES //

import Radium from 'radium';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import styles from 'styles';
import getUserData from 'getUserData';


// REACT COMPONENTS //

import Tooltip from 'tooltip';
import FeedbackResponse from 'feedback-response';
import FeedbackForm from 'feedback-form';


// FEEDBACK BUTTONS //

class FeedbackButton extends Component {
	/**
	* Create a clickable buttons to collect user feedback.
	*/
	constructor( props ) {
		super();

		/*
		* Event handler invoked when one of the feedback buttons is clicked.
		*/
		this.handleClick = () => {
			let type = props.type;
			switch ( type ) {
			case 'feedback':
				this.showFeedbackForm();
			break;
			case 'understood':
				this.submitUnderstood();
			break;
			case 'confused':
				this.submitConfused();
			break;
			}
		};

		/*
		* Event handler invoked when mouse is moved over one of the feedback buttons.
		*/
		this.handleMouseOver = () => {
			let pos = $( ReactDOM.findDOMNode( this ) ).offset();
			this.myTooltip.setState({
				visible: true
			});
		};

		/*
		* Event handler invoked when mouse leaves one of the feedback butttons.
		*/
		this.handleMouseLeave = () => {
			this.myTooltip.setState({
				visible: false
			});
		};

	}

	/**
	* Displays feedback form to collect detailed user feedback
	*/
	showFeedbackForm() {
		let verticalPosition = $(document).scrollTop();
		let w = window.innerHeight;
		let top = verticalPosition + w * 0.1;

		/*
		* Helper function that removes the feedback form. Passed as the `closeHandler` to FeedbackForm
		* component, it is invoked when the close button of the form is clicked. Also called when form
		* is submitted.
		*/
		const removeFeedbackForm = () => {
			ReactDOM.unmountComponentAtNode( document.getElementById( 'feedbackForm' ) );
		};

		/*
		* Helper function that bundles data from the feedback form and sends it to server. Passed as
		* `submitHandler` to FeedbackForm component, it is invoked when the submit button of the form is
		* clicked.
		*
		* @param {Object} event - event properties
		*/
		const submitFeedback = ( event ) => {
			event.preventDefault();
			removeFeedbackForm();

			let data = {
				type: 'feedback',
				id: this.props.for,
				comment: feedbackForm.state.comment,
				checked: feedbackForm.state.checked
			};
			// sendData( data, config );
			this.showFeedbackResponse( 'feedback' );
		};

		// Render feedback form and keep reference...
		const feedbackForm = ReactDOM.render( <FeedbackForm submitHandler={submitFeedback} closeHandler={removeFeedbackForm} top={top}/>,
			document.getElementById( 'feedbackForm' )
		);
	}

	/**
	* Callback invoked when user clicks on the "Confused" button. Sends
	* data to server and display notification.
	*/
	submitConfused() {
		let data = {
			id: this.props.for,
			userID: getUserData().id,
			type: 'confused'
		};
		this.showFeedbackResponse( 'confused' );
		// sendData( data, config );
	}

	/**
	* Callback invoked when the user clicks the "Understood" button. Sends
	* data to server and display notification.
	*/
	submitUnderstood() {
		let data = {
			id: this.props.for,
			userID: getUserData().id,
			type: 'understood'
		};
		this.showFeedbackResponse( 'understood' );
		// sendData( data, config );
	}

	/*
	* Displays the appropriate feedback response after user has clicked on one of the feedback buttons.
	*
	* @param {String} type - one of `understood`, `confused` and `feedback`
	*/
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
				responseText = 'Thank you for taking the time to share your feedback with us.';
			break;
		}
		ReactDOM.render( <FeedbackResponse top={ verticalPosition + w*0.1 } text={responseText}/>, document.getElementById( 'response' ) );
	}

	/**
	* Render method for React component
	*/
	render() {
		let type = this.props.type;
		return (
			<div className="feedbackButton" style={ [ styles.icon, styles[type] ] } onClick={this.handleClick}
				onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
				<Tooltip ref={(ref) => this.myTooltip = ref} text={this.props.tooltip}/>
			</div>
		);
	}
}


// EXPORTS //

export default Radium( FeedbackButton );
