import styled from "styled-components";
import { TodoItemProps } from "../types";
import { ReactComponent as CheckedIcon } from "../assets/radio_button_checked.svg";
import { ReactComponent as UnCheckedIcon } from "../assets/radio_button_unchecked.svg";

const Li = styled.li`
  list-style-type: none;
`;

const Label = styled.label<{ $active?: boolean }>`
  display: flex;
  cursor: pointer;
  min-height: 3rem;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.5rem;
  overflow: hidden;

  text-decoration: line-through;
  text-decoration: ${(props) => (props.$active ? "line-trough" : "none")};
  color: ${(props) => (props.$active ? "lightgrey" : "black")};

  svg {
    fill: ${(props) => (props.$active ? "lightgreen" : "lightcoral")};
  }
`;

const Input = styled.input`
  display: none;
`;

const IconWrapper = styled.div`
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  align-self: start;
  height: 3rem;
`;

const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  text-align: left;
  font-size: 1.5rem;
`;

const TodoItem = ({
  item,
  changeItemState,
}: {
  item: TodoItemProps;
  changeItemState: (id: number) => void;
}) => {
  return (
    <Li>
      <Label $active={item.checked}>
        <IconWrapper>
          {item.checked ? <CheckedIcon /> : <UnCheckedIcon />}
        </IconWrapper>
        <Input
          checked={item.checked}
          type="checkbox"
          onChange={() => changeItemState(item.id)}
        />
        <Text>{item.text}</Text>
      </Label>
    </Li>
  );
};

export default TodoItem;
