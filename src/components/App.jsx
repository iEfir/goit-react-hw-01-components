import user from '../data/user.json';
import { Profile } from './profileApp/Profile';
import data from '../data/data.json';
import friends from '../data/friends.json';
import { FriendList } from './friendList/FriendList';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Statistics } from './statisticsApp/Statistics';

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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
