import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { MentionsInput, Mention } from "react-mentions";
import IconButton from "@mui/material/IconButton";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import { Typography, Container, Box } from "@mui/material";
import io from "socket.io-client";

//make connections to backend

export default function LiveChat({ messages, setMessages }) {
  const [msg, setMsg] = useState("");
  const [likes, setLikes] = useState([]);
  const [input, setInput] = useState("");
  const [tagNames, setTagNames] = useState([]);

  const newJoinObj = {
    party_id: "4380fnfn3943n39n",
    party_name: "pepsi party",
    // ...getUser,
  };
  let live;
  live = io.connect(`localhost:9112/live-party`);
  useEffect(() => {
    live.emit("joinParty", newJoinObj);
    return true;
  }, []);

  // Handle connection error
  live.on("connect_error", (err) => {
    console.log(err.message);
  });

  //For Emmtting user welcome event
  useEffect(() => {
    live.on("welcome", (data) => {
      console.log(data);
      if (data.type === "user action") {
        setMessages((prevState) => [...prevState, data]);
      }
      // setUser(data.message);
      // setOpen(true);
      // setOpen(false);
    });
  }, []);
  useEffect(() => {
    //For Emmtting notifications when another user joins the room
    live.on("joinedParty", (data) => {
      if (data.type === "user action") {
        setMessages((prevState) => [...prevState, data]);
      }
    });
  }, []);

  // for emmitting chat events
  useEffect(() => {
    live.on("message", (data) => {
      // let { image_url, username, text } = data;
      console.log(data);
      setMessages((prevState) => [...prevState, data]);
    });
  }, []);

  // For emitting like reactions events
  useEffect(() => {
    live.on("like", (data) => {
      // let { image_url, username, text } = data;
      // console.log(data);
      setTimeout(() => setLikes(false), 1480);
      setLikes(true);

      console.log(data.text);
    });
  }, []);

  // For handling like button click and message send events
  const handleClick = () => {
    live.emit("like", {
      party_id: newJoinObj.party_id,
      username: getUser.username,
    });
  };

  // Handling user input message
  const handleChange = (event, newValue, newPlainTextValue, mentions) => {
    setInput(event.target.value);
    if (mentions.length > 0) {
      setTagNames(mentions);
    }
    setMsg(newPlainTextValue);
  };
  // For handling message send events
  const submit = (e) => {
    e.preventDefault();
    console.log("submitted");
    live.emit("chat", { message: msg.trim(), mentions: tagNames });
    setInput("");
    setMsg("");
  };

  return (
    <Container
      sx={{
        position: "fixed",
        alignItems: "center",
        width: "90%",
        margin: "auto",
        bottom: 0,
        color: "white",
        background: "none",
        border: "2px solid red",
      }}
    >
      {/* Like animation */}
      {/* {likes && (
        <Box className="like" sx={{ display: "flex" }}>
          <FavoriteIcon fontSize="large" className="white" />
          {/* <FavoriteIcon fontSize="large" className="white" />
            <FavoriteIcon fontSize="large" className="white" />
          <FavoriteIcon fontSize="large" className="white" /> */}
      {/* </Box>  */}
      {/* // )} */}
      {/* Footer section */}

      <Grid container spacing={0}>
        <Grid item xs={11}>
          <div className={styles["livechat-form"]}>
            {/* user chat input form */}
            <form className={styles["form"]} onSubmit={submit}>
              <Box
                sx={{
                  // width: "full",
                  // flexGrow: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MentionsInput
                  className={styles["comments-textarea"]}
                  value={input}
                  allowSuggestionsAboveCursor={true}
                  onChange={handleChange}
                >
                  <Mention
                    style={mentionStyle}
                    trigger="@"
                    data={users}
                    appendSpaceOnAdd={true}
                    renderSuggestion={renderUserSuggestion}
                  />
                </MentionsInput>
              </Box>
              <IconButton
                type="submit"
                className={styles["livechat-form_button"]}
              >
                {/* submit */}
                <SendRoundedIcon className={styles["white"]} />
              </IconButton>
            </form>
          </div>
        </Grid>
        {/* Like button */}
        <Grid item xs={1}>
          <IconButton disabled={likes} onClick={handleClick}>
            <FavoriteIcon fontSize="large" className={styles["white"]} />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
}

//Render room users Suggestions to be tagged
const renderUserSuggestion = (entry, search, highlightedDisplay) => {
  return (
    <Paper
      sx={{
        width: 150,
        top: 5,
        background: "none",
        color: "#00A9E0",
      }}
    >
      <Typography variant="inherit">{highlightedDisplay}</Typography>
    </Paper>
  );
};

// Room users demo data
const users = [
  {
    id: "walter",
    display: "@Walter White",
  },
  {
    id: "jesse",
    display: "@Jesse Pinkman",
  },
  {
    id: "gus",
    display: '@Gustavo "Gus" Fring',
  },
  {
    id: "saul",
    display: "@Saul Goodman",
  },
  {
    id: "hank",
    display: "@Hank Schrader",
  },
  {
    id: "skyler",
    display: "@Skyler White",
  },
  {
    id: "mike",
    display: "@Mike Ehrmantraut",
  },
];

const mentionStyle = {
  color: "#00A9E0",
  // opacity: 0.8,
  // padding: "1 1 1 5",
  // marginLeft: -1,
  // borderRadius: 3,
};
