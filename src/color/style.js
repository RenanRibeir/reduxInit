import styled from 'styled-components/native';

export const OneButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  border-radius: 5px;
`;

export const StyledView = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ItemColor = styled.View`
  height: 200px;
  width: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${props => props.color};
`;

export const SelectorColor = styled.View`
  border-width: 1px;
  width: 300px;
  height: 90px;
  border-radius: 5px;
  border-color: silver;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;
