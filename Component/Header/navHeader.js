import { Container, Navbar, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useStyles } from "./style";

const NavHeader = ({ leftIcon, title, rightIcon, primary = false, leftLink, rightLink }) => {
  const navigate = useNavigate();
  const classes = useStyles(primary);

  const handleLeftLink = () => {
    navigate(leftLink);
  };
  const handleRightLink = () => {
    navigate(rightLink);
  };
  return (
    <Navbar className={classes.root}>
      <Container className="">
        <Stack direction="horizontal" gap={3} className={classes.navHeaderContainer}>
          <div onClick={handleLeftLink} className={classes.navItems}>
            {leftIcon}
          </div>
          <div className={classes.navItems}>{title}</div>
          <div className={classes.navItems} onClick={handleRightLink}>
            {rightIcon}
          </div>
        </Stack>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
