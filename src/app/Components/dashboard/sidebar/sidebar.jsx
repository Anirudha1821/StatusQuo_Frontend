import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";


const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Projects",
        path: "/dashboard/projects",
        icon: <MdShoppingBag />,
      },
      {
        title: "Tasks",
        path: "/dashboard/tasks",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Project Analytics",
        path: "/dashboard/myproject",
        icon: <MdShoppingBag />,
      },
    ],
  },
  // {
  //   title: "Analytics",
  //   list: [
      // {
      //   title: "Revenue",
      //   path: "/dashboard/revenue",
      //   icon: <MdWork />,
      // },
      // {
      //   title: "Reports",
      //   path: "/dashboard/reports",
      //   icon: <MdAnalytics />,
      // },
      // {
      //   title: "Teams",
      //   path: "/dashboard/teams",
      //   icon: <MdPeople />,
      // },
  //   ],
  // },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  //const { user } = await auth();
  return (
      
     <div className={styles.container}>
      <div className={styles.user}>

        <div className={styles.userDetail}>
          <span className={styles.username}>Status-Quo</span>
          <span className={styles.userTitle}>Status-Quo</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div> 
  );
};

export default Sidebar;
