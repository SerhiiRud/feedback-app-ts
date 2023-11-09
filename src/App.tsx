import { useState } from 'react';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { NotificationMessage } from './components/NotificationMessage/NotificationMessage';
import { VidgetContainer, Header } from './App.styled';

function App() {
  const [good, setGood] = useState<number>(0);
  const [neutral, setNeutral] = useState<number>(0);
  const [bad, setBad] = useState<number>(0);

  const options = { good, neutral, bad };

  const onLeaveFeedback = (option: string) => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = (): number => {
    return Object.values(options).reduce((acc, num) => acc + num, 0);
  };

  const countPositiveFeedbackPercentage = (): number => {
    return Math.round((good * 100) / countTotalFeedback()) || 0;
  };
  return (
    <VidgetContainer>
      <Header>Please leave feedback</Header>
      <Section>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Header>Statistics</Header>
      <Section>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMessage />
        )}
      </Section>
    </VidgetContainer>
  );
}

export default App;
