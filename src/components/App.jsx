import "./App.css";
import userData from "../userData.json";
import transactions from "../transactions.json";
import friends from "../friends.json";
import items from "../transactions.json";

import Profile from "./Profile";
import Friendlist from "./FriendList";
import TransactionHistory from "./TransactionHistory";
const { username, tag, location, avatar, stats } = userData;

function App() {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Friendlist friends={friends} />
      <TransactionHistory items={items} />
    </>
  );
}

export default App;
