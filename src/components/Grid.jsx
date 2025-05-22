import React from "react";
import { workoutProgram as training_plan } from "../utils/index.js";
import WorkoutCard from "./WorkoutCard";

export default function Grid() {
  const isLocked = false;
  const selectedWorkout = 6;

  return (
    <div className="training-plan-grid">
      {Object.keys(training_plan).map((workout, workoutIndex) => {
        const type =
          workoutIndex % 3 === 0
            ? "Push"
            : workoutIndex % 3 === 1
            ? "Pull"
            : "Legs";

        const trainingPlan = training_plan[workoutIndex];
        const dayNum =
          workoutIndex / 8 <= 1 ? "0" + (workoutIndex + 1) : workoutIndex + 1;
        const icon =
          workoutIndex % 3 === 0 ? (
            <i className="fa-solid fa-dumbbell" />
          ) : workoutIndex % 3 === 1 ? (
            <i className="fa-solid fa-weight-hanging" />
          ) : (
            <i className="fa-solid fa-bolt" />
          );

        if (workoutIndex === selectedWorkout) {
          return (
            <WorkoutCard
              key={workoutIndex}
              trainingPlan={trainingPlan}
              type={type}
              workoutIndex={workoutIndex}
              dayNum={dayNum}
              icon={icon}
            />
          );
        }

        return (
          <button
            className={"plan-card " + (isLocked ? "inactive" : "")}
            key={workoutIndex}
          >
            <div className="plan-card-header">
              <p>Day {dayNum}</p>
              {isLocked ? <i className="fa-solid fa-lock" /> : icon}
            </div>
            <div className="plan-card-header">
              <h4>
                <b>{type}</b>
              </h4>
            </div>
          </button>
        );
      })}
    </div>
  );
}
