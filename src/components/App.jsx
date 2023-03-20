import user from './profileApp/user.json';
import { Profile } from './profileApp/Profile';
import data from './statistics/data.json';
import { Statistics } from './statistics/Statistics.jsx';
import friends from './friendList/friends.json';
import { FriendList } from './friendList/FriendList';
import transactions from './transactionHistory/transactions.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
