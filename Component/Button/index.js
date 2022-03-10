import { Button } from "@mui/material";

import { useStyles } from "./style";

const ButtonComponent = ({
  width,
  button,
  title,
  large,
  handleClick,
  secondary,
}) => {
  const props = {
    button: button,
    width: width,
  };
  const classes = useStyles(props);

  return (
    <Button onClick={handleClick} className={classes.buttonWrapper}>
      <p className={classes.buttonTitle}>{title}</p>
    </Button>
  );
};

export const LeaderBoardButton = ({
  title,
  handleClick,
  selected,
  secondary,
}) => {
  const classes = useStyles(selected);
  return (
    <Button
      variant={selected ? "contained" : "outlined"}
      onClick={handleClick}
      className={classes.leaderButtonWrapper}
    >
      <p className={classes.leaderButtonTitle}>{title}</p>
    </Button>
  );
};

export default ButtonComponent;
