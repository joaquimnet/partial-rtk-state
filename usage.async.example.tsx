import React from 'react';
import { useFetchTodosQuery } from './features/todo/todo-slice';

export const App: React.FC = () => {
  const { data = [], isFetching, error } = useFetchTodosQuery(3);
  return (
    <div>
      <p>Number of To Dos fetched: {data.length}</p>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo) => (
            <tr key={todo.id}>
              <td>
                {todo.title}
              </td>
              <td>
                {todo.completed ? 'Yes' : 'No'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
