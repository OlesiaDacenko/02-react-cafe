import css from './App.module.css';
import { useState } from 'react';
import MarkupCafeInfo from '../cafeInfo/CafeInfo';
import type { Votes, VoteType } from '../../types/votes';
import VoteOption from '../voteOptions/VoteOptions';
import VoteStats from '../voteStats/VoteStats';
import Notification from '../notification/Notification';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes(votes => {
      const upd = { ...votes };
      upd[type] = votes[type] + 1;
      return upd;
    });
  };
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate =
    totalVotes > 0 ? Math.round((votes.good / totalVotes) * 100) : 0;

  return (
    <div className={css.app}>
      <MarkupCafeInfo />
      <VoteOption
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />

      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
// Реалізуйте умовний рендеринг компонентів залежно від значення totalVotes.
//  Компонент VoteStats має рендеритись тільки після того, як буде отримано
//  хоча б один голос. Тому, якщо значення totalVotes більше нуля, то має
//  рендеритись компонент VoteStats. Якщо ж відгуків немає (тобто totalVotes
//   дорівнює 0), то має рендеритись компонент Notification.
