/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Quicklinks from "./Quicklinks";
import User from "./User";

const styles = {
  container: (open: boolean) => css`
    width: 40%;
    flex-shrink: 0;

    position: sticky;
    top: 20px;
    align-self: flex-start;

    > div {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      border: 1px solid #e9eef7;

      > div {
        margin-bottom: 25px;

        h2 {
          margin: 0 0 15px;
          color: #1f56c6;
          font-size: 1.2rem;
        }

        span {
          display: inline-block;
          margin: 5px;

          a {
            display: inline-block;
            padding: 8px 14px;
            border-radius: 6px;
            text-decoration: none;
            color: white;
            background: linear-gradient(135deg, #1f56c6, #3b82f6);
          }
        }
      }
    }

    /* ================= Mobile ================= */

    @media (max-width: 768px) {
      position: fixed;
      top: 64px;
      left: 0;

      width: 300px;
      height: calc(100vh - 64px);

      margin: 0;
      padding: 0;

      overflow-y: auto;
      overflow-x: hidden;

      background: #fff;
      box-shadow: 4px 0 20px rgba(0, 0, 0, 0.15);

      z-index: 9999;

      transform: ${open ? "translateX(0)" : "translateX(-100%)"};
      transition: transform 0.3s ease;

      > div {
        min-height: 100%;
        border-radius: 0;
        padding: 20px;
        box-sizing: border-box;
      }
    }
  `,
};

type SidebarProps = {
  open: boolean;
};

const Sidebar = ({ open }: SidebarProps) => {
  return (
    <div css={styles.container(open)}>
      <div>
        <div>
          <h2>Academic Years</h2>

          <span>
            <a href=".">Year 7</a>
          </span>

          <span>
            <a href=".">Year 8</a>
          </span>

          <span>
            <a href=".">Year 9</a>
          </span>

          <span>
            <a href=".">Year 10</a>
          </span>

          <span>
            <a href=".">Year 11</a>
          </span>
        </div>

        <Quicklinks />

        <User />
      </div>
    </div>
  );
};

export default Sidebar;