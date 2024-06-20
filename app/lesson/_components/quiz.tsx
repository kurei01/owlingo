"use client";

import {
  challengeOptions,
  challengeProgress,
  challenges,
  userProgress,
} from "@/db/schema";

type Props = {
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
    challengeProgress: (typeof challengeProgress.$inferSelect)[];
  })[];
  initialHearts: number;
  initialPercentage: number;
  userSubscription: any; //TODO: Replace with subscription DB type
};

export const Quiz = ({
  initialLessonId,
  initialLessonChallenges,
  initialHearts,
  initialPercentage,
  userSubscription,
}: Props) => {
  return <div> Quiz</div>;
};
