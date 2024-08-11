import React from "react";
import styled from "styled-components";

const TimerDisplay = ({ formattedTime }) => {
	return (
		<Display>
			<h1>{formattedTime}</h1>
		</Display>
	);
};

export default TimerDisplay;

const Display = styled.div`
	margin-bottom: 20px;
	font-size: 48px;
	font-weight: bold;
	color: #333;
`;
