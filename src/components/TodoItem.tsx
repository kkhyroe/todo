import styled from "styled-components";
import { TodoItemProps } from "../types";
import CheckedIcon from "../assets/radio_button_checked.svg";
import UnCheckedIcon from "../assets/radio_button_unchecked.svg";

const Li = styled.li`
  list-style-type: none;
`;

const Label = styled.label`
  display: flex;
  font-size: 2em;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const Icon = styled.img<{ $active?: boolean }>`
  //color: lightgreen;
  fill: lightgreen;
  // text-decoration: ${(props) => (props.$active ? "line-trough" : "none")};
`;

const Text = styled.span<{ $active?: boolean }>`
  text-decoration: line-through;
  text-decoration: ${(props) => (props.$active ? "line-trough" : "none")};
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
      <Label>
        {item.checked ? (
          <Icon src={CheckedIcon} alt="Checked Icon" $active />
        ) : (
          <Icon src={UnCheckedIcon} alt="Unchecked Icon" />
        )}
        <Input
          checked={item.checked}
          type="checkbox"
          onChange={() => changeItemState(item.id)}
        />
        <Text $active={item.checked}>{item.text}</Text>
      </Label>
    </Li>
  );
};

export default TodoItem;
