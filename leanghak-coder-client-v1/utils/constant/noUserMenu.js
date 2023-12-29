import PeopleIcon from '@mui/icons-material/People'; //PeopleIcon
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'; //home
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'; //course
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'; //about
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded'; //contact

const navItems = [
  // {
  //   label: 'Home',
  //   icon: <HomeRoundedIcon />,
  //   path: '/home',
  // },

  // {
  //   label: 'Contact',
  //   icon: <RecentActorsRoundedIcon />,
  //   path: '/contact',
  // },
];

// No user
const noUserItems = [
  {
    label: 'Home',
    icon: <HomeRoundedIcon />,
    path: '/',
  },

  {
    label: 'Alumni',
    icon: <PeopleIcon />,
    path: '/alumni',
  },
  {
    label: "Student's Project",
    icon: <SchoolRoundedIcon />,
    path: '/student-projects',
  },
  {
    label: 'About',
    icon: <InfoRoundedIcon />,
    path: '/about',
  },
  {
    label: 'Contact',
    icon: <RecentActorsRoundedIcon />,
    path: '/contact',
  },
];
export {
  navItems,
  noUserItems,
};
