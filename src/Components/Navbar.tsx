/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  navbar: css`
    display: none;

    @media (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      position: fixed;
      top: 0;
      left: 0;
      right: 0;

      height: 64px;
      padding: 0 20px;
      box-sizing: border-box;

      background: #fff;
      border-bottom: 1px solid #e5e7eb;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

      z-index: 10000;
    }
  `,

  title: css`
    margin: 0;
    color: #1f56c6;
    font-size: 1.3rem;
    font-weight: 600;
  `,

  button: css`
    border: none;
    background: transparent;
    font-size: 28px;
    cursor: pointer;
    color: #1f56c6;
  `,
};

type NavbarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Navbar = ({ open, setOpen }: NavbarProps) => {
  return (
    <div css={styles.navbar}>
      <h2 css={styles.title}>Classroom</h2>

      <button css={styles.button} onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>
    </div>
  );
};

export default Navbar;