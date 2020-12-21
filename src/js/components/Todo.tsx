import * as React from "react";
import styled from 'styled-components';

import { Checkbox } from './todo/Checkbox';
import { TaskState, addTask, toggleTask } from './todo/task';

const initialState: TaskState = {
  nextId: 1,
  tasks: []
};

export const Todo: React.FC = () => {
  const [state, setState] = React.useState<TaskState>(initialState);

  // submit直後から次に正常なsubmitが完了するまではvalidation messageを表示する
  const [shouldValidate, setShouldValidate] = React.useState(false);
  const [input, setInput] = React.useState('');

  const handleToggleTask = React.useCallback((id: number) => {
    setState(toggleTask(id));
  }, []);

  const handleSubmit = React.useCallback((message: string) => {
    setShouldValidate(true);
    if (message.length < 3) {
      return
    };

    setState(addTask(message));
    setInput('');
    setShouldValidate(false);
  }, []);

  return <Page>
    <Title>MY TODO</Title>
    <TaskListWrapper>
      <TaskList>
        {
          state.tasks.map((task) => {
            return <TaskCard key={task.id.toString()}>
                     <Checkbox checked={task.done} onClick={() => {handleToggleTask(task.id)}} />
                     <TaskText>{task.message}</TaskText>
                   </TaskCard>
          })
        }
      </TaskList>
    </TaskListWrapper>

    <ButtonForm>
      <ButtonInput value={input}
                   placeholder={'TODOを入力してください'}
                   onChange={e => setInput(e.target.value)}/>
      <ButtonSubmit onClick={() => handleSubmit(input)}>追加する</ButtonSubmit>
    </ButtonForm>
    {(shouldValidate && input.length < 3) ? <WarningText>3文字以上で入力してください</WarningText> : null }
  </Page>
};

const Page = styled.div`
  width: 80%;
  text-align: center;
  margin: auto;
  padding: 5px;
`;

const Title = styled.h1`
  color: #3B4043;
  font-size: 24px;

  text-align: left;
  padding-left: 3px;
`;

const TaskCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 3px 5px;

  border: 1px solid #CDD6DD;
  text-align: left;
`;

const TaskText = styled.p`
  font-size: 24px;
`;

const ButtonInput = styled.input.attrs({type: 'text'})`
  border: 1px solid #98A6B5;
  font-size: 12px;

  padding: 4px 3px 3px;
  width: 250px;

  &::placeholder {
    color: #98A6B5;
  }
`;

const ButtonSubmit = styled.button`
  background-color: #004BB1;
  color: #FFFFFF;
  border: none;

  width: 100px;
`;

const ButtonForm = styled.div`
  font-size: 16px;

  width: 50%;
`;

const TaskList = styled.ul`
  padding: 5px;
  width: 500px;
`;

const TaskListWrapper = styled.div`
  margin: auto;
`;

const WarningText= styled.p`
  text-align: left;
  font-size: 6px;
  padding: 2px 20px;
  color: #DC143C;
`;