import React from "react";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";
import useTimer from "../../hooks/useTimer";
import styled from "styled-components";

const TimerComponent = () => {
	const { formattedTime, start, stop, restart, isActive } = useTimer(1);

	return (
		<Container>
			<TimerDisplay formattedTime={formattedTime} />
			<TimerControls
				start={start}
				stop={stop}
				restart={restart}
				isActive={isActive}
			/>
		</Container>
	);
};

export default TimerComponent;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 20px;
	padding: 20px;
	border: 2px solid #333;
	border-radius: 10px;
	background: #f9f9f9;
`;
