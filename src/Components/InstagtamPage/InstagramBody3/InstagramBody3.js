import * as React from "react";
import "../Styles/Style.scss";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TelegramIcon from "@mui/icons-material/Telegram";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import foodAccountImg from "../Images/food_account.jpg";
import foodImg3 from "../Images/food3.png";

const InstagramBody = () => {

  return (
    <div className="post">
      <Card sx={{ Width: 200 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <CardMedia
                component="img"
                height="40"
                width="50"
                src={foodAccountImg}
                alt="Paella dish"
              />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="recipesinhindi
          "
          subheader="Hindi recipe"
        />
        <CardMedia
          component="img"
          height="310"
          width="250"
          src={foodImg3}
          alt="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="like">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton aria-label="share">
            <TelegramIcon />
          </IconButton>
          <span className="socialIcons">
            <IconButton aria-label="save">
              <TurnedInNotIcon />
            </IconButton>
          </span>
        </CardActions>
        <CardContent>
          <strong>505 Likes</strong>
          <Typography variant="body2" color="text.secondary">
            <b> recipesinhindi</b>💕💕💕💕💕💕💕 <br /> #sweet #indinsweet #peda
            #milkpeda #dudhkimithai #milkibar #yummy #yum #dessert #sweet #nice
            #milkyway #chocolatecake #cake #sweetlover #indiansweet
            #indiansweetlover #indiansweets #homemade #healthyfood #hindirecipe
            #dollykiduniya
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstagramBody;
