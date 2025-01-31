// import React from 'react';
import styled from 'styled-components';

const UiButton = ({content}: {content:string}) => {
  return (
    <StyledWrapper>
      <button>
        <span className="transition" />
        <span className="gradient" />
        <span className="label">{content}</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    font-size: 17px;
    padding: .5em 2.7em;
    font-weight: 500;
    background:rgb(14, 75, 37);
    color: white;
    border: none;
    position: relative;
    overflow: hidden;
    border-radius: 0.6em;
    cursor: pointer;
  }

  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 0.6em;
    margin-top: -0.25em;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3)
    );
  }

  .label {
    position: relative;
    top: -1px;
  }

  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: rgba(21, 179, 15, 0.6);
    border-radius: 9999px;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  button:hover .transition {
    width: 14em;
    height: 14em;
  }

  button:active {
    transform: scale(0.97);
  }`;

export default UiButton;
