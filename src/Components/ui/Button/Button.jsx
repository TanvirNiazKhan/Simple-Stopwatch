import styled from "styled-components";

const Button = styled.button`
  color: black;
  background-color: ${(props) => (props.color ? props.color : "#00e676")};
  height: 50px;
  width: 150px;
  font-weight: bolder;
  font-family: Arial;
  border: none;
  cursor: pointer;
  box-shadow: initial;
  border-radius: 5px;
  margin: 10px;
`;

export default Button;
