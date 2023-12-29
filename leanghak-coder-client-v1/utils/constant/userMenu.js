import PeopleIcon from '@mui/icons-material/People'; //PeopleIcon
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'; //VideoLibraryIcon
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
    path: '/home',
  },
  {
    label: 'Tutorials',
    icon: <VideoLibraryIcon />,
    sublist: [
      {
        label: 'HTML Tutorial',
        path: '!#',
      },
      {
        label: 'CSS Tutorial',
        path: '!#',
      },
      {
        label: 'Tailwindcss',
        path: '!#',
      },
      {
        label: 'Bootstrap',
        path: '!#',
      },
      {
        label: ' C Programming',
        path: '!#',
      },
      {
        label: 'JavaScript',
        path: '!#',
      },
      {
        label: 'Figma',
        path: '!#',
      },
    ],
  },
  {
    label: 'Alumni',
    icon: <PeopleIcon />,
    path: '/users/alumni',
  },
  {
    label: "Student's Project",
    icon: <SchoolRoundedIcon />,
    path: '/users/student-projects',
  },
  {
    label: 'About',
    icon: <InfoRoundedIcon />,
    path: '/users/about',
  },
  {
    label: 'Contact',
    icon: <RecentActorsRoundedIcon />,
    path: '/users/contact',
  },
];
export {
  navItems,
  noUserItems,
};
