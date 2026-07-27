/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Navbar } from "./Navbar";
import ItemList from "./ItemList";
import Pagination from "./Pagination";
import { listTypes } from "../types";

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
  const [selectedYear, setSelectedYear] = useState("Year 3");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const curriculum: Record<string, listTypes[]> = {
    "Year 3": [
      { title: "KS3 English", desc: "5 lessons" },
      { title: "KS3 Literature", desc: "5 lessons" },
    ],

    "Year 4": [
      { title: "KS4 English", desc: "5 lessons" },
      { title: "KS4 Literature", desc: "5 lessons" },
    ],

    "Year 5": [
      { title: "KS5 English", desc: "5 lessons" },
      { title: "KS5 Literature", desc: "5 lessons" },
    ],
  };

  const topics = curriculum[selectedYear] || [];

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear]);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />

      <div css={styles.dashboard}>
        <div>
          <div>
            <ItemList
              topics={topics}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
            />

            <Pagination
              currentPage={currentPage}
              totalItems={topics.length}
              itemsPerPage={itemsPerPage}
              setCurrentPage={setCurrentPage}
            />
          </div>

          <Sidebar
            open={open}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
