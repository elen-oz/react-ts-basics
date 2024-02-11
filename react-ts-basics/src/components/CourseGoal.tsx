import { FC } from 'react';

interface Props {
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}

const CourseGoal: FC<Props> = ({ id, title, description, onDelete }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};
export default CourseGoal;
