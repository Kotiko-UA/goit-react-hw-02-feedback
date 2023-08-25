import { Button, Wrapper } from './Feedback.styled';

export const FeedbackOptions = p => {
  return (
    <Wrapper>
      <Button name="good" onClick={p.onLeaveFeedback} type="button">
        good
      </Button>
      <Button name="neutral" onClick={p.onLeaveFeedback} type="button">
        neutral
      </Button>
      <Button name="bad" onClick={p.onLeaveFeedback} type="button">
        bad
      </Button>
    </Wrapper>
  );
};
