/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
const styles = {
  body: css`
    width: 25%;
    margin: 20px;
    margin-top: 35px;
  `,
  span: css`
    background: linear-gradient(50deg, #fff 0%, #1f56c6 20%);
    padding: 5px;
    border-radius: 4px;
    color: white;
    margin: 5px;
    a {
      color: #fff;
      text-decoration: none;
    }
  `,
  qlink: css`
    display: flex;
    span {
      margin-top: 6px;
      color: #1f56c6;
    }
    a {
      text-decoration: none;
      margin: 5px;
      color: #1f56c6;
    }
  `,
};
const Sidebar = () => {
  return (
    <div css={styles.body}>
      <div>
        <h2>Academic Years</h2>
        <div>
          <span css={styles.span}>
            <a href=".">Year 7</a>
          </span>
          <span css={styles.span}>
            <a href=".">Year 8</a>
          </span>
          <span css={styles.span}>
            <a href=".">Year 9</a>
          </span>
          <span css={styles.span}>
            <a href=".">Year 10</a>
          </span>
          <span css={styles.span}>
            <a href=".">Year 11</a>
          </span>
        </div>
        <h2>Quick links</h2>
        <hr />
        <div css={styles.qlink}>
          <span>
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
          <a href="."> Word of the day.</a>
        </div>
        <div css={styles.qlink}>
          <span>
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
          <a href=".">Kamusi Yangu.</a>
        </div>
        <div css={styles.qlink}>
          <span>
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
          <a href=".">Hadithi Hadithi?</a>
        </div>
        <div css={styles.qlink}>
          <span>
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
          <a href=".">Fasihi Simulizi</a>
        </div>
        <hr />
        <div css={styles.qlink}>
          <span>
            <AiOutlineUser />
          </span>
          <a href=".">Andrew Bada</a>
        </div>
        <div css={styles.qlink}>
          <span>
            <IoLogOutOutline />
          </span>
          <a href=".">Logout</a>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
