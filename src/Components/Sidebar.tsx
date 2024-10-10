/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const styles = {
  body: css`
    width: 25%;
    margin: 20px;
    margin-top: 30px;
  `,
  span: css`
    background: linear-gradient(102deg, #cc00c5 0%, #1061b7 100%);
    padding: 5px;
    border-radius: 4px;
    color: white;
    margin: 5px;
  `,
  link: css`
    color: white;
    text-decoration: none;
  `,
};
const Sidebar = () => {
  return (
    <div css={styles.body}>
      <div>
        <h2>Academic Years</h2>
        <div>
          <span css={styles.span}>
            {" "}
            <a href="." css={styles.link}>
              Year 7
            </a>
          </span>
          <span css={styles.span}>
            {" "}
            <a href="." css={styles.link}>
              Year 8
            </a>
          </span>
          <span css={styles.span}>
            {" "}
            <a href="." css={styles.link}>
              Year 9
            </a>
          </span>
          <span css={styles.span}>
            {" "}
            <a href="." css={styles.link}>
              Year 10
            </a>
          </span>
          <span css={styles.span}>
            {" "}
            <a href="." css={styles.link}>
              Year 11
            </a>
          </span>
        </div>
        <h2>Quick links</h2>
        <hr />
        <p>
          <MdOutlineKeyboardDoubleArrowRight />
          Word of the day.
        </p>
        <p>
          <MdOutlineKeyboardDoubleArrowRight />
          Kamusi Yangu.
        </p>
        <p>
          <MdOutlineKeyboardDoubleArrowRight />
          Hadithi Hadithi?
        </p>
        <p>
          <MdOutlineKeyboardDoubleArrowRight />
          Fasihi Simulizi.
        </p>
        <hr />
        <div>
          <p>
            <span>Andrew Bada</span>
          </p>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
