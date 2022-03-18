import { useState, useEffect } from "react";
import { Avatar, AvatarGroup, Card, Box, CardContent, Typography } from "@mui/material";
import { Stack } from "react-bootstrap";
import { IoMdShareAlt } from "react-icons/io";
import { BsChevronLeft } from "react-icons/bs";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import ButtonComponent from "../Button";
import { Header } from "../../Component/Header";
import Link from "next/link";
import { useStyles } from "./style";
import styles from "./style.module.css";

// const { localStorage } = window;

const PartyCard = ({
  id,
  data,
  secondary,
  button,
  badge,
  paid = true,
  header,
  partyBtnFunction,
}) => {
  const props = {
    secondary: secondary,
    header: header,
    badge: badge,
  };

  const classes = useStyles(props);
  const route = useRouter();
  const handleOnClick = () => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("paid", paid);
    navigate("/party/details", { state: { data: data, paid: paid } });
  };

  return (
    <Card className={`${styles["card-box"]} ${classes.squareBox}`}>
      <Box sx={{ width: "100%" }}>
        <CardContent className={`${classes.squareContent}`}>
          <Stack className={classes.stack} direction="horizontal" gap={2}>
            <div className={`${styles.badge} ${classes.badge}`}>
              {moment(data?.date).format("Do MMM, h:mm a") || "5 Dec, 7:0"}
            </div>
            <div className={classes.badge}>
              <IoMdShareAlt />
            </div>
          </Stack>
          <Box className={classes.partyCardTitleWrapper}>
            <h4 className={`${styles.title} ${classes.partyCardTitle}`}>
              {data?.name || "Anybody Cole"}
            </h4>
          </Box>
          <div className={classes.avatarGroupContainer}>
            {data?.Geust?.invites.length + data?.Geust?.geusts.length === 0 ? (
              <Typography sx={{ color: "white", fontWeight: "bold" }}>Add guests</Typography>
            ) : (
              <AvatarGroup
                total={Number(data?.Geust?.invites.length + data?.Geust?.geusts.length) || 20}
              >
                {data?.Geust?.geusts.map((guestData, i) => (
                  <Avatar
                    key={i}
                    className="avatar"
                    alt={guestData?.username}
                    src={guestData?.profile_pic}
                  />
                ))}
              </AvatarGroup>
            )}
          </div>
          <Link href={`/details/${id}`}>
            <div className={`${styles["btn-box"]} ${classes.buttonContainer}`}>
              <ButtonComponent title="Enter Party" button={button} />
            </div>
          </Link>
        </CardContent>
      </Box>
    </Card>
  );
};

export const PartyCardTwo = ({ secondary, header, onClick, id }) => {
  const [data, setData] = useState();
  const [, setPaid] = useState();
  const { isLoading, error, isSuccessful, partyDetails, message } = useSelector(
    (s) => s.getPartyDetails
  );
  const token = useSelector((state) => state.verifyToken.token);

  useEffect(() => {
    // const tempData = localStorage.getItem("data");
    const tempPaid = localStorage.getItem("paid");

    // setData(JSON.parse(tempData));
    setPaid(tempPaid);
  }, []);
  const props = {
    secondary: secondary,
    header: header,
    // badge: badge,
  };
  const classes = useStyles(props);
  return (
    <Card className={classes.squareBox}>
      <CardContent className={[classes.squareContent, classes.squareBoxWrapper]}>
        <div className={classes.navWrapper}>
          <Header
            type="nav"
            leftLink={`/party/${token}`}
            leftIcon={<BsChevronLeft />}
            rightIcon={<PersonAddAltIcon onClick={() => onClick()} id={id} />}
          />
        </div>
        <Box className={classes.avatarGroupContainer}>
          {partyDetails?.party?.Geust?.invites.length +
            partyDetails?.party?.Geust?.geusts.length ===
          0 ? (
            <>
              <Typography sx={{ color: "white", fontWeight: "bold" }}>
                Your invite seems empty,{" "}
              </Typography>{" "}
              <p>Invite Guest</p>
            </>
          ) : (
            <AvatarGroup
              total={
                Number(
                  partyDetails?.party?.Geust?.invites.length +
                    partyDetails?.party?.Geust?.geusts.length
                ) || 20
              }
            >
              <Avatar alt="Remy Sharp" src="" />
              <Avatar alt="Travis Howard" src="" />
              <Avatar alt="Agnes Walker" src="" />
              <Avatar alt="Trevor Henderson" src="" />
            </AvatarGroup>
          )}
        </Box>
        <Box className={classes.partyCardTitleWrapper}>
          <h4 className={classes.partyCardTitle}>{partyDetails?.party?.name || "Anybody Cole"}</h4>
        </Box>
        <Box className={[classes.badge, classes.badgeContainer]}>
          {moment(partyDetails?.party?.date).format("Do MMM, h:mm a") || "5 Dec, 7:0"}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PartyCard;
