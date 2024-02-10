import { FC } from 'react';

interface Props {
  title: string;
  description: string;
}

const CourseGoal: FC<Props> = ({ title, description }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
};
export default CourseGoal;
