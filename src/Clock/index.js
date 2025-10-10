import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";
import { dateFormat, timeFormat } from "./clockUtils";

const Clock = () => {
  const date = useCurrentDate();

  return (
    <StyledClock>
      <p>
        Dzisiaj jest {date.toLocaleString(undefined, dateFormat)}, {date.toLocaleString(undefined, timeFormat)}
      </p>
    </StyledClock>
  );
};

export default Clock;;