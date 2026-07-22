/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";

const styles = {
  dashboard: css`
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: math;

    > div {
      width: 1200px;
      display: flex;
      align-items: flex-start;
      gap: 30px;
      margin: 20px auto;

      > div:first-of-type {
        flex: 1;
        min-width: 0;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;

        > div:first-of-type {
          width: 100%;
        }
      }
    }
  `,
};

const Dashboard = () => {
  return (
    <div css={styles.dashboard}>
      <div>
        <div>
          <ItemList title="" desc="" />
          <Pagination />
        </div>

        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;