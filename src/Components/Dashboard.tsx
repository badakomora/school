/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";
const styles = {
  dashboard: css`
    width: 100%;
    display: flex;
    font-family: math;
    justify-content: center;
    div {
      width: 1000px;
      display: flex;
      margin: auto;
      div {
        display: block;
        width: 100%;
        margin: 20px;
      }
    }
  `,
};
const Dashboard = () => {
  return (
    <div css={styles.dashboard}>
      <div>
        <div>
          <ItemList title={""} desc={""} />
          <Pagination />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
export default Dashboard;
