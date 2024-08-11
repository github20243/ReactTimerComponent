import React from "react";
import styled from "styled-components";

const TimerControls = ({ start, stop, restart, isActive }) => {
	return (
		<ControlsContainer>
			<Button onClick={start} disabled={isActive}>
				Start
			</Button>
			<Button onClick={stop} disabled={!isActive}>
				Stop
			</Button>
			<Button onClick={restart}>Restart</Button>
		</ControlsContainer>
	);
};

export default TimerControls;

const ControlsContainer = styled.div`
	display: flex;
	gap: 10px;
`;

const Button = styled.button`
	padding: 10px 20px;
	font-size: 16px;
	color: #fff;
	background-color: #007bff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #0056b3;
	}

	&:disabled {
		background-color: #d6d6d6;
		cursor: not-allowed;
	}
`;
