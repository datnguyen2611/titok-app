import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./styles.modules.scss";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img alt="" src="" className={cx("avatar")} />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Hello</span>
          <FontAwesomeIcon icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>Nguyen van</span>
      </div>
    </div>
  );
}

export default AccountItem;
