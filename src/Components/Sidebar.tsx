/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Quicklinks from "./Quicklinks";
import User from "./User";
const styles = {
  container: css`
    width: 100%;
    display: block;
    margin-top: 50px;
    div {
      div {
        margin: 0;
        padding: 0;
        background: transparent;

        span {
          background: linear-gradient(50deg, #fff 0%, #1f56c6 20%);
          padding: 5px;
          border-radius: 4px;
          color: white;
          margin: 5px;
          a {
            color: #fff;
            text-decoration: none;
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
