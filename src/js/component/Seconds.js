import React from "react";
import PropTypes from "prop-types";

const Seconds = props => {
	return (
		<div className="second">
			<p>{props.children}</p>
		</div>
	);
};

export default Seconds;

Seconds.propTypes = {
	children: PropTypes.number
};
