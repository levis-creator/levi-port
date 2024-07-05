import { Navlink, StatisticData } from "./types";
// Navbar Data
export const navlinks: Navlink[] = [
  {
    label: "Home",
    link: "/#home",
  },
  {
    label: "Resume",
    link: "/#resume",
  },
  {
    label: "Services",
    link: "/#services",
  },
  {
    label: "Skills",
    link: "/#skills",
  },
  {
    label: "Projects",
    link: "/#projects",
  },
  {
    label: "Contact",
    link: "/#contact",
  },
  {
    label: "Blogs",
    link: "/blogs",
  },
];
// Home Section
export const profile = {
  name: "Levis Nyingi",
  career: "Software Developer",
  image: "./levis_the_software_engineer.png",
};

export const statistics: StatisticData[] = [
  {
    title: "Projects",
    data: 50,
  },
  {
    title: "Clients",
    data: 15,
  },
  {
    title: "Return Clients",
    data: 72,
    percentage: true,
  },
];

export const contactDetails = {
  location: "A104 Waiyaki Way, Nairobi, 00100, Kenya",
  email: "levis.nyingi@gmail.com",
  website: "levisnyingi.com",
};
