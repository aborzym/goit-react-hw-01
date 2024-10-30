import css from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img className={css.avatar} src={avatar} alt="User avatar" />
        <p className={css.username}>{username}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsElement}>
          <span className={css.statsTitle}>Followers</span>
          <span className={css.statsNumber}>{stats.followers}</span>
        </li>
        <li className={css.statsElement}>
          <span className={css.statsTitle}>Views</span>
          <span className={css.statsNumber}>{stats.views}</span>
        </li>
        <li className={css.statsElement}>
          <span className={css.statsTitle}>Likes</span>
          <span className={css.statsNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
