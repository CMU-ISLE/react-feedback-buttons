'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // MODULES //

// FEEDBACK BUTTONS //

var FeedbackButtons = function (_React$Component) {
	_inherits(FeedbackButtons, _React$Component);

	function FeedbackButtons() {
		_classCallCheck(this, FeedbackButtons);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FeedbackButtons).call(this));

		_this.props = {
			tooltip: {
				understood: 'That makes sense.',
				confused: 'I am confused.',
				feedback: 'I have feedback.'
			}
		};
		return _this;
	}

	_createClass(FeedbackButtons, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ 'class': 'feedbackButtons' },
				_react2.default.createElement(
					'div',
					{ 'class': 'fb_line' },
					_react2.default.createElement('div', { 'class': 'fb_feedback fb_icon', 'data-tooltip': '{this.props.tooltip.feedback}', 'data-type': 'feedback' }),
					_react2.default.createElement('div', { 'class': 'fb_confused fb_icon', 'data-tooltip': '{this.props.tooltip.confused}', 'data-type': 'confused' }),
					_react2.default.createElement('div', { 'class': 'fb_understood fb_icon', 'data-tooltip': '{this.props.tooltip.understood}', 'data-type': 'understood' })
				),
				_react2.default.createElement('div', { 'class': 'clear' })
			);
		}
	}]);

	return FeedbackButtons;
}(_react2.default.Component);

exports.default = FeedbackButtons;