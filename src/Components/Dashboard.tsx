/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
const styles = {
  body: css`
    height: 100%;
    display: flex;
    justify-content:center;
    font-family: math;
  `,
};
const Dashboard = () => {
  return (
    <div css={styles.body}>
      <ItemList />
      <Sidebar />
    </div>
  );
};
export default Dashboard;
