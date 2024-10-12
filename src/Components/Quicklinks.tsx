/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const styles = {
  quicklinks: css`
    width: 100%;
    display: block;
    margin: 0;
    div {
      width: 100%;
      display: block;
      margin: 0px;
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
const Quicklinks = () => {
  return (
    <div css={styles.quicklinks}>
      <h2>Quick links</h2>
      <hr />
      <div>
        <div>
          <span>
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
          <a href="."> Word of the day.</a>
        </div>
        <div>
          <span>
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
          <a href=".">Kamusi Yangu.</a>
        </div>
        <div>
          <span>
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
          <a href=".">Hadithi Hadithi?</a>
        </div>
        <div>
          <span>
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
          <a href=".">Fasihi Simulizi</a>
        </div>
      </div>
    </div>
  );
};
export default Quicklinks;
