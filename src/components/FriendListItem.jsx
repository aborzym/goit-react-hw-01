import css from "./FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem = ({ src, name, status }) => {
  return (
    <div className={css.item}>
      <img src={src} alt="Avatar" width={48} />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, status ? css.isOnline : css.isOffline)}>
        {status ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
