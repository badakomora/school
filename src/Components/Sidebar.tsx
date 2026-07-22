/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Quicklinks from "./Quicklinks";
import User from "./User";

const styles = {
  container: css`
    width: 500px;
    flex-shrink: 0;

    position: sticky;
    top: 20px;
    align-self: flex-start;

    @media (max-width: 768px) {
      display: none;
    }

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
            transition: 0.25s;

            &:hover {
              transform: translateY(-2px);
            }
          }
        }
      }
    }
  `,
};

const Sidebar = () => {
  return (
    <div css={styles.container}>
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