import HomePageHeader from "./homePageHeader";
import NavHeader from "./navHeader";

export const Header = ({
  type,
  title,
  leftIcon,
  rightIcon,
  primary,
  leftLink,
  coinId,
  giftId,
  leaderId,
  rightLink,
}) => {
  return (
    <>
      {type === "homepage" && (
        <HomePageHeader coinId={coinId} giftId={giftId} leaderId={leaderId} />
      )}
      {type === "nav" && (
        <NavHeader
          title={title}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          primary={primary}
          leftLink={leftLink}
          rightLink={rightLink}
        />
      )}
    </>
  );
};
