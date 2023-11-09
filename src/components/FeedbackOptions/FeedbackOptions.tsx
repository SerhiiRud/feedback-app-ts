import PropTypes from 'prop-types';
import { ButtonSet, ButtonItem } from './FeedbackOtions.styled';

type TProps = {
  options: {
    good: number;
    neutral: number;
    bad: number;
  };
  onLeaveFeedback: (option: string) => void;
};

export const FeedbackOptions = ({ options, onLeaveFeedback }: TProps) => {
  return (
    <div>
      <ButtonSet>
        {Object.keys(options).map(option => (
          <li key={option}>
            <ButtonItem type="button" onClick={() => onLeaveFeedback(option)}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </ButtonItem>
          </li>
        ))}
      </ButtonSet>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
