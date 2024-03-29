import styled from 'styled-components';

const Spinner = styled.div<{ color: string; size: number }>`
  color: official;
  display: inline-block;
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  div {
    transform-origin: ${({ size }) => (size / 80) * 40}px
      ${({ size }) => (size / 80) * 40}px;
    animation: lds-spinner 1.2s linear infinite;
  }

  div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: ${({ size }) => (size / 80) * 3}px;
    left: ${({ size }) => (size / 80) * 37}px;
    width: ${({ size }) => (size / 80) * 6}px;
    height: ${({ size }) => (size / 80) * 18}px;
    border-radius: ${({ size }) => (size / 80) * 20}%;
    background: ${({ color }) => color};
  }

  div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }

  div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }

  div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }

  div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }

  div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }

  div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }

  div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }

  div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }

  div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }

  div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }

  div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const LoadingSpinner = ({
  color,
  size,
}: {
  color: string;
  size?: number;
}) => {
  return (
    <Spinner color={color} size={size || 24}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Spinner>
  );
};
