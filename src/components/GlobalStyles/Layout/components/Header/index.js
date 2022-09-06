import classNames from "classnames";
import styles from "./Header.module.scss";
import images from "~/assets/images";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img alt="Tiktok" src={images.logo} />
      </div>
    </header>
  );
}

export default Header;
