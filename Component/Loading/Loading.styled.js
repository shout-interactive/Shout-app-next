import styled, { keyframes } from "styled-components";

const rotate = keyframes `
	0% {
		transform: rotate(0)
	}
	
	100% {
		transform: rotate(360deg)
	}
`;

const move1 = keyframes `
	0%,
	5% {transform: translate(0, 0);}
	to {transform: translate(0, -100%);}
`;

const move2 = keyframes `
	0%,
	5% {
		transform: translate(0, 0);
	}
	to {
		transform: translate(100%, 100%);
	}
`;

const move3 = keyframes `
	0%,
	15% {
		transform: translate(0);
	}
	to {
		transform: translate(-100%, 100%);
	}
`;

export const ContainerLoad = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: #fff;
`;

export const LoadingWrapper = styled.div `
  animation: ${rotate} 1s linear infinite normal;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  height: 0.8rem;
  position: relative;
  width: 0.8rem;
`;

export const Ball = styled.div `
  animation-name: ${move1};
  animation-duration: 0.5s;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  background-color: #242679;
  border-radius: 50%;
  height: 100%;
  position: absolute;
  width: 100%;

  &:nth-of-type(2) {
    animation-name: ${move2};
  }

  &:nth-of-type(3) {
    animation-name: ${move3};
  }
`;