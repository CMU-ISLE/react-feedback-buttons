import React from 'react';
import ReactDOM from 'react-dom';
import FeedbackButtons from './../src/index.js';

class App extends React.Component {
	render () {
		return (
			<div>
				<header>
				<h2><a href="https://github.com/cmu-isle/react-feedback-buttons">React Feedback Buttons</a></h2>
				<div style={ {backgroundColor: "lightgrey", width: 300, height: 100 } }>
					<FeedbackButtons></FeedbackButtons>
				</div>
				</header>
			</div>
		);
	}
}

ReactDOM.render( <App />, document.querySelector( '#app' ) );
