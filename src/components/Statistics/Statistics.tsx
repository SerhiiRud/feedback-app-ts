import React from 'react';

import { Value, RatingType, Percent, Total } from './Statistics.styled';

type TProps = {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
};

export const Statistics: React.FC<TProps> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <RatingType>
        Good: <Value>{good}</Value>
      </RatingType>
      <RatingType>
        Neutral: <Value>{neutral}</Value>
      </RatingType>
      <RatingType>
        Bad: <Value>{bad}</Value>
      </RatingType>
      <RatingType>
        Total: <Total>{total}</Total>
      </RatingType>
      <p>
        Positive feedback:{' '}
        <Percent feedback={positivePercentage}>{positivePercentage}%</Percent>
      </p>
    </div>
  );
};
