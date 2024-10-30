import "./App.css";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

import Profile from "./Profile";
import Friendlist from "./FriendList";
const { username, tag, location, avatar, stats } = userData;

function App() {
  console.log(friends.length);
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Friendlist />
    </>
  );
}

export default App;