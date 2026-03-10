import { useState } from 'react';
import * as S from './ChallengeComponent.styled';
import arrowLeft from './arrow-left.svg';
import arrowRight from './arrow-right.svg';

type Task = {
  id: number;
  title: string;
};

export function ChallengeComponent() {
  const [inputValue, setInputValue] = useState('');
  const [todoTasks, setTodoTasks] = useState<Task[]>([]);
  const [inProgressTasks, setInProgressTasks] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  return (
    <>
      <S.TaskColumnsContainer>
        <S.TaskColumn>
          <S.ColumnHeader>To Do</S.ColumnHeader>
          {todoTasks.map((task) => (
            <S.TaskCard key={task.id}>
              <S.LeftButton disabled>
                <img src={arrowLeft} alt="Move task left" />
              </S.LeftButton>
              <S.CardLabel>{task.title}</S.CardLabel>
              <S.RigthButton
                onClick={() => {
                  setTodoTasks((oldTodoTasks) =>
                    oldTodoTasks.filter((t) => t.id !== task.id),
                  );
                  setInProgressTasks((oldInProgressTasks) => [
                    ...oldInProgressTasks,
                    task,
                  ]);
                }}
              >
                <img src={arrowRight} alt="Move task right" />
              </S.RigthButton>
            </S.TaskCard>
          ))}
        </S.TaskColumn>
        <S.TaskColumn>
          <S.ColumnHeader>In Progress</S.ColumnHeader>
          {inProgressTasks.map((task) => (
            <S.TaskCard key={task.id}>
              <S.LeftButton
                onClick={() => {
                  setInProgressTasks((oldInProgressTasks) =>
                    oldInProgressTasks.filter((t) => t.id !== task.id),
                  );
                  setTodoTasks((oldTodoTasks) => [...oldTodoTasks, task]);
                }}
              >
                <img src={arrowLeft} alt="Move task left" />
              </S.LeftButton>
              <S.CardLabel>{task.title}</S.CardLabel>
              <S.RigthButton
                onClick={() => {
                  setInProgressTasks((oldInProgressTasks) =>
                    oldInProgressTasks.filter((t) => t.id !== task.id),
                  );
                  setDoneTasks((oldDoneTasks) => [...oldDoneTasks, task]);
                }}
              >
                <img src={arrowRight} alt="Move task right" />
              </S.RigthButton>
            </S.TaskCard>
          ))}
        </S.TaskColumn>
        <S.TaskColumn>
          <S.ColumnHeader>Done</S.ColumnHeader>
          {doneTasks.map((task) => (
            <S.TaskCard key={task.id}>
              <S.LeftButton
                onClick={() => {
                  setDoneTasks((oldDoneTasks) =>
                    oldDoneTasks.filter((t) => t.id !== task.id),
                  );
                  setInProgressTasks((oldInProgressTasks) => [
                    ...oldInProgressTasks,
                    task,
                  ]);
                }}
              >
                <img src={arrowLeft} alt="Move task left" />
              </S.LeftButton>
              <S.CardLabel>{task.title}</S.CardLabel>
              <S.RigthButton disabled>
                <img src={arrowRight} alt="Move task right" />
              </S.RigthButton>
            </S.TaskCard>
          ))}
        </S.TaskColumn>
      </S.TaskColumnsContainer>

      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputValue.trim() === '') return;
          setTodoTasks((oldTodoTasks) => [
            ...oldTodoTasks,
            { id: Date.now(), title: inputValue },
          ]);
          setInputValue('');
        }}
      >
        <S.FormInput
          placeholder="Add Task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <S.FormButton>+</S.FormButton>
      </S.Form>
    </>
  );
}
