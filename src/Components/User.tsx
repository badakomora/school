/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { AiOutlineUser } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
const styles = {
  user: css`
    width: 100%;
    display: block;
    margin: 0;
    div {
      width: 100%;
      display: block;
      div {
        display: flex;
        margin: 0;
        span {
          padding: 0;
          background: transparent;
          color: #1f56c6;
        }
        a {
          text-decoration: none;
          margin: 5px;
          color: #1f56c6;
        }
      }
    }
  `,
};
const User = () => {
  return (
    <div css={styles.user}>
      <hr />
      <div>
        <div>
          <span>
            <AiOutlineUser />
          </span>
          <a href="."> Andrew Bada</a>
        </div>
        <div>
          <span>
            <IoLogOutOutline />
          </span>
          <a href=".">Logout</a>
        </div>
      </div>
    </div>
  );
};
export default User;
