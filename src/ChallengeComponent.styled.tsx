import styled from 'styled-components';

export const TaskColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 2rem;
`;

export const TaskColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  border-radius: 0.8rem;
  min-height: 80rem;
`;

export const ColumnHeader = styled.h2`
  font-size: 3.2rem;
  text-align: center;
  padding: 1rem;
`;

export const TaskCard = styled.div`
  margin: 1rem;
  height: 11rem;
  display: flex;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
  border-radius: 0.8rem;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

export const CardLabel = styled.span`
  text-align: center;
  font-size: 2.2rem;
  flex-grow: 1;
`;

export const LeftButton = styled.button<{ disabled?: boolean }>`
  width: 5rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background: ${({ disabled }) => (disabled ? '#ff9e9e' : '#C20B0B')};
`;

export const RigthButton = styled(LeftButton)<{ disabled?: boolean }>`
  background: ${({ disabled }) => (disabled ? '#218D1F52' : '#218D1F')};
  ${({ disabled }) => (disabled ? 'opacity: 0.3;' : '')}
`;

export const FormInput = styled.input`
  width: 30rem;
  height: 6rem;
  border: 1px solid black;
  font-size: 2.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const FormButton = styled.button`
  width: 9rem;
  height: 6rem;
  background: #0066ff;
  font-size: 3.5rem;
  border-radius: 0.8rem;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 3rem;
`;
