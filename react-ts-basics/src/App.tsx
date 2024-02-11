import { useState } from 'react';
import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';
import goalsImg from './assets/goals.jpg';
import NewGoal from './components/NewGoal';

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const addGoalHandler = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  };

  const deleteGoalHandler = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={addGoalHandler} />
      <CourseGoalList goals={goals} onDeleteGoal={deleteGoalHandler} />
    </main>
  );
};

export default App;
