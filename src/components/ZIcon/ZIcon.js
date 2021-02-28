import React, {Component} from 'react';
import PropTypes from 'prop-types';


import './style/icon.scss'

class ZIcon extends Component {
	static defaultProps = {
		className: ''
	}
	constructor(props) {
		super(props)
	}
	render() {
		return <>
			<svg className={`z-icon ${this.props.className}`} aria-hidden="true">
				<use xlinkHref={`#icon-${this.props.icon}`}></use>
			</svg>
		</>
	}
}

ZIcon.propTypes = {
	icon: PropTypes.string,
	className: PropTypes.string
}

export default ZIcon
