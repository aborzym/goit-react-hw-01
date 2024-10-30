import css from "./FriendList.module.css";
import friends from "../friends.json";

import FriendListItem from "./FriendListItem";

const Friendlist = () => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => {
        return (
          <li className={css.item} key={friend.id}>
            <FriendListItem
              src={friend.avatar}
              name={friend.name}
              status={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Friendlist;
