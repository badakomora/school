/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const styles = {
  example: css`
    width: 55%;
    margin: 20px;
  `,
  list: css`
    margin: 0;
    padding: 0;
    list-style: none;

    a {
      text-decoration: none;
      color: #000;
      li {
        display: flex;
        flex-direction: column;
        padding: 15px;
        box-shadow: 0px 2px 10px lavender;
        margin-bottom: 10px;
        background-color: #fff;
        border-left: 4px solid #1061b7;
        position: relative;
        cursor: pointer;
        border-radius: 4px;
        overflow: hidden;
        transition: all 0.3s ease;

        &:hover {
          color: #fff;
          background-color: inherit;

          &:after {
            width: 100%;
          }
        }

        .title {
          font-weight: bold;
          font-size: 18px;
          position: relative;
          z-index: 2;
          line-height: 24px;
        }

        .subtitle {
          font-size: 14px;
          opacity: 0.7;
          position: relative;
          z-index: 2;
        }

        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          transition: width 0.5s ease;
          z-index: 1;
        }
      }
    }
  `,
  listing: css`
    &:after {
      background: linear-gradient(50deg, #fff 0%, #1f56c6 20%);
    }
  `,
  pagination: css`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    span {
      background: linear-gradient(50deg, #fff 0%, #1f56c6 20%);
      padding: 5px;
      border-radius: 5px;
      color: white;
      margin: 5px;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  `,
};
const ItemList = () => {
  return (
    <div id="example" css={styles.example}>
      <div>
        <h1>Year 1 Topics</h1>
      </div>
      <ul className="list" css={styles.list}>
        <a href=".">
          <li className="listing" css={styles.listing}>
            <span className="title">
              A Journey through Greek Myths: Reading.
            </span>
            <span className="subtitle">5 lessons</span>
          </li>
        </a>
        <a href=".">
          <li className="listing" css={styles.listing}>
            <span className="title">
              A Journey through Greek Myths: Reading.
            </span>
            <span className="subtitle">5 lessons</span>
          </li>
        </a>
        <a href=".">
          <li className="listing" css={styles.listing}>
            <span className="title">
              A Journey through Greek Myths: Reading.
            </span>
            <span className="subtitle">5 lessons</span>
          </li>
        </a>
        <a href=".">
          <li className="listing" css={styles.listing}>
            <span className="title">
              A Journey through Greek Myths: Reading.
            </span>
            <span className="subtitle">5 lessons</span>
          </li>
        </a>
        <a href=".">
          <li className="listing" css={styles.listing}>
            <span className="title">
              A Journey through Greek Myths: Reading.
            </span>
            <span className="subtitle">5 lessons</span>
          </li>
        </a>
      </ul>
      <div css={styles.pagination}>
        <span>
          <a href=".">Prev</a>
        </span>
        <span>
          <a href=".">Next</a>
        </span>
      </div>
    </div>
  );
};
export default ItemList;
