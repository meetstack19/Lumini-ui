import type { UserMetric } from "./UserMetricColumns";

export const dummyData = (): UserMetric[] => {

    const data: UserMetric[] = [];

    for (let i = 0; i < 100; i++) {
        data.push({
            uid: i + 1,
            userName: `John Doe ${i + 1}`,
            mostVisitedTopic: `Topic ${i + 1}`,
            lastUserAction: `Action ${i + 1}`,
        });
    }

    console.log('dummyData ', data);

    return data;
};