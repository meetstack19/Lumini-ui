import type { UserMetric } from './UserMetricColumns';

export const dummyData = (): UserMetric[] => {
  const data: UserMetric[] = [];
  const names = [
    'JaysonBourne',
    'GintokiSakata',
    'SureshKumar',
    'FranzKafka',
    'MattDamone',
    'RajeshKumar',
    'KenshinHimura',
    'AbdulKalam',
  ];
  const topics = [
    'Tokyo',
    'London',
    'Paris',
    'New York',
    'Sydney',
    'Melbourne',
    'Toronto',
    'Berlin',
    'Madrid',
    'Rome',
  ];

  for (let i = 0; i < 90; i++) {
    data.push({
      uid: i + 1,
      email: `${names[i % names.length].toLowerCase()}${
        Math.floor(Math.random() * 900) + 100
      }@gmail.com`,
      mostVisitedTopic: `${topics[Math.floor(Math.random() * topics.length)]}`,
      moderatelyVisitedTopic: `${topics[Math.floor(Math.random() * topics.length)]}`,
      leastVisitedTopic: `${topics[Math.floor(Math.random() * topics.length)]}`,
    });
  }

  return data;
};
