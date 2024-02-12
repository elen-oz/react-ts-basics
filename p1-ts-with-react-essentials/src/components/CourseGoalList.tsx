import { type CourseGoal as CGoal } from '../App';
import { type ReactNode } from 'react';
import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

interface Props {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: Props) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode='warning' severity='medium'>
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              description={goal.description}
              onDelete={onDeleteGoal}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default CourseGoalList;
