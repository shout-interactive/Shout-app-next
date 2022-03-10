import { Container, Navbar, Stack } from "react-bootstrap";
import { useRouter } from "next/router";
import { useStyles } from "./style";

const NavHeader = ({
  leftIcon,
  title,
  rightIcon,
  primary = false,
  leftLink,
  rightLink,
}) => {
  const classes = useStyles(primary);
  const route = useRouter();
  const handleLeftLink = () => {
    route.push(leftLink);
  };
  // const handleRightLink = () => {
  //   rightLink;
  // };
  return (
    <Navbar className={classes.root}>
      <Container className="">
        <Stack
          direction="horizontal"
          gap={3}
          className={classes.navHeaderContainer}
        >
          <div onClick={handleLeftLink} className={classes.navItems}>
            {leftIcon}
          </div>
          <div className={classes.navItems}>{title}</div>
          <div className={classes.navItems}>{rightIcon}</div>
        </Stack>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
