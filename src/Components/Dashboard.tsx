/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Navbar } from "./Navbar";
import ItemList from "./ItemList";
import Pagination from "./Pagination";

const styles = {
  dashboard: css`
    width: 100%;
    display: flex;
    justify-content: center;

    > div {
      width: 90%;
      display: flex;
      gap: 25px;
      align-items: flex-start;

      > div:first-of-type {
        flex: 1;
      }

      @media (max-width: 768px) {
        display: block;
      }
    }
  `,
};

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />

      <div css={styles.dashboard}>
        <div>
          <div>
            <ItemList title="" desc="" />
            <Pagination />
          </div>

          <Sidebar open={open} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;