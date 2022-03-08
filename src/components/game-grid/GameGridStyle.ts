import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  appearance: none;
  background-color: #42dfe3;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  margin: 5px;

  &:focus {
    box-shadow: none;
    outline: none;
  }

  &:hover {
    background-color: #32b4b8;
  }

  &:disabled {
    background-color: #bee5e6;
    border-color: rgba(27, 31, 35, 0.1);
    color: rgba(255, 255, 255, 0.8);
    cursor: default;
  }

  &:active {
    background-color: #198e91;
    box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  justify-content: center;
`;

export const Grid = styled.div`
  border: 1px solid #d3d3d3;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Cell = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color};
  border: 1px solid #c5eced;
`;
