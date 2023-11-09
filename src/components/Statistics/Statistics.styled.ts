import styled from '@emotion/styled';

type Props = {
  feedback: number;
};

export const RatingType = styled.p`
  width: 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Value = styled.span`
  dispaly: inline-block;
  background-color: #fff;
  border-radius: 4px;
  padding-right: 4px;
  padding-left: 4px;
`;

export const Total = styled.span`
  dispaly: inline-block;
  background-color: #fff;
  order-radius: 4px;
  padding-right: 3px;
  padding-left: 3px;
  border: 1px solid black;
`;

export const Percent = styled.span<Props>`
  dispaly: inline-block;
  color: ${({ feedback }) => {
    if (feedback > 80) {
      return 'green';
    } else if (feedback <= 80 && feedback > 20) {
      return 'orange';
    } else {
      return 'red';
    }
  }};
`;
