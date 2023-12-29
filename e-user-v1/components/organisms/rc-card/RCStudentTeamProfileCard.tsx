import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TelegramIcon from '@mui/icons-material/Telegram';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';

interface Props {
    name: string,
    position: string,
}
export default function RCStudentTeamProfileCard({ name, position }: Props) {
    return (
        <div className="">
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://th.bing.com/th/id/OIP.wK8hhqP1Y4jHQxWdaScX7AHaE9?w=294&h=197&c=7&r=0&o=5&pid=1.7"
                    title="green iguana"
                />
                <CardContent style={{ textAlign: "center" }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Mrr {name}
                    </Typography>
                    <Typography variant="body2" color="gold">
                        {position}
                    </Typography>
                </CardContent>
                <CardActions sx={{display: "flex", justifyContent: "center"}}>
                    <Stack direction="row" spacing={1}>
                        <LinkInIcon sx={{ color: "#7D78787" }} />
                        <TelegramIcon sx={{ color: "#7D78787" }} />
                        <FacebookIcon sx={{ color: "#7D78787" }} />
                    </Stack>
                </CardActions>
            </Card>

        </div>
    );
};