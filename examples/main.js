// MODULES //

import React from 'react';
import ReactDOM from 'react-dom';
import FeedbackButtons from './../src/index.js';


// MAIN EXAMPLE APP //

class App extends React.Component {
	render () {
		return (
			<div>
				<header>
				<h2><a href="https://github.com/cmu-isle/react-feedback-buttons">React Feedback Buttons</a></h2>
				<div id="box" style={ {backgroundColor: "lightgrey", width: 300, height: 100 } }>
					<FeedbackButtons for="box"></FeedbackButtons>
				</div>
				</header>
			</div>
		);
	}
}


// RENDER APP //

ReactDOM.render( <App />, document.querySelector( '#app' ) );
