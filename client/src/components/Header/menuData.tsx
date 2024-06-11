import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 33,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
 
  {
    id: 4,
    title: "Our Services",
    newTab: false,
    submenu: [
      {
        id: 43,
        title: "Wealth Management",
        path: "/wealth-management",
        newTab: false,
      },
      {
        id: 44,
        title: "Courses",
        // path: "/blog-sidebar",
        path: "/course",
        newTab: false,
      },
      {
        id: 45,
        title: "Workshops and Events",
        path: "/events",
        newTab: false,
      },
      // {
      //   id: 46,
      //   title: "Sign In Page",
      //   path: "/signin",
      //   newTab: false,
      // },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
