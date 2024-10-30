import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
const Friendlist = ({ friends }) => {
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
