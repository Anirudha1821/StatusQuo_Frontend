import { cards } from "../lib/data";
import Card from "../Components/dashboard/card/card";
import Chart from "../Components/dashboard/chart/chart";
import styles from "../Components/dashboard/dashboard.module.css";
import Rightbar from "../Components/dashboard/rightbar/rightbar";
<<<<<<< HEAD
import Tasks from "../Components/dashboard/tasks/tasks";
=======
import Transactions from "../Components/dashboard/tasks/transactions";
>>>>>>> origin/Rdev2.0

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Tasks />
        <Chart />
      </div>
      {/* <div className={styles.side}>
        <Rightbar />
      </div> */}
    </div>
  );
};

export default Dashboard;
