import styled from 'styled-components';

const ButtonDelete = styled.div`
  cursor: pointer;
  position: relative;
  font-size: 26px;
  margin-left: 16px;
  margin-bottom: 2px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  min-width: 16px;
  font-weight: 600;

  background: none;
  border: none;

  cursor: pointer;

  &:hover:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -4px;
    bottom: -6px;
    right: -4px;
    border-radius: 50%;
    background-color: rgba(98, 108, 119, 0.25);
    box-shadow: 0 0 6px #fff;
  }

  color: #000;

  &:hover {
    color: red;
    font-weight: 700;
  }
  &:active {
    color: #fff;
    font-weight: 700;
  }
`;

export default ButtonDelete;
