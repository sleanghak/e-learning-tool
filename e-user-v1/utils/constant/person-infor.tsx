import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TransgenderIcon from '@mui/icons-material/Transgender';
import WorkIcon from '@mui/icons-material/Work';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

const personalInformation = [
    {
        startIcon: <PersonIcon />,
        placeholder: "Full Name",
        name: "name",
        type: "text",
    },
    {
        startIcon: <MailIcon />,
        placeholder: "Email",
        name: "email",
        type: "email",
    },

    {
        startIcon: <RecentActorsIcon />,
        placeholder: "Student ID",
        name: "student-id",
        type: "text",
    },
    
    {
        startIcon: <CalendarMonthIcon />,
        placeholder: "Date of birth",
        name: "date-of-birth",
        type: "text",
    },
    {
        startIcon: <TransgenderIcon />,
        placeholder: "Gender",
        name: "gender",
        type: "text",
    },
    {
        startIcon: <WorkIcon />,
        placeholder: "Job/Career",
        name: "job",
        type: "text",
    },
    {
        startIcon: <YouTubeIcon />,
        placeholder: "YouTube",
        name: "youtube",
        type: "text",
    },
    {
        startIcon: <LinkedInIcon />,
        placeholder: "LinkedIn",
        name: "Linkedin",
        type: "text",
    },
    {
        startIcon: <FacebookIcon />,
        placeholder: "Facebook",
        name: "facebook",
        type: "text",
    },
    {
        startIcon: <TelegramIcon />,
        placeholder: "Telegram",
        name: "telegram",
        type: "text",
    },
];

export {
    personalInformation,
};