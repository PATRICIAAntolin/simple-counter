import React from "react";
import Seconds from "./Seconds";
import PropTypes from "prop-types";
import { AiOutlineClockCircle } from "react-icons/ai";
import "../../styles/index.scss";

const SecondsCounter = props => {
	return (
		<div className="container">
			<div className="counterBody">
				<AiOutlineClockCircle color="white" size="5.4em" />
				<Seconds>{props.num6}</Seconds>
				<Seconds>{props.num5}</Seconds>
				<Seconds>{props.num4}</Seconds>
				<Seconds>{props.num3}</Seconds>
				<Seconds>{props.num2}</Seconds>
				<Seconds>{props.num1}</Seconds>
			</div>
		</div>
	);
};

export default SecondsCounter;

SecondsCounter.propTypes = {
	num1: PropTypes.number,
	num2: PropTypes.number,
	num3: PropTypes.number,
	num4: PropTypes.number,
	num5: PropTypes.number,
	num6: PropTypes.number
};
