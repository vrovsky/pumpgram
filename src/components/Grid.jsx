import React, { useState } from "react";
import { workoutProgram as training_plan } from "../utils/index.js";
import WorkoutCard from "./WorkoutCard";

export default function Grid() {
  const [savedWorkouts, setSavedWorkouts] = useState(null);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const completedWorkouts = [];
  const isLocked = false;

  function handleSave(index, data) {
    console.log("aaaa");
    const newObj = {
      ...savedWorkouts,
      [index]: {
        ...data,
        isConplete: !!data.isConplete || !!savedWorkouts?.[index]?.isConplete,
      },
    };
    setSavedWorkouts(newObj);
    localStorage.setItem("pumpgram", JSON.stringify(newObj));
    setSavedWorkouts(null);
  }

  function handleComplete(index, data) {
    const newObj = { ...data };
    newObj.isConplete = true;
    handleSave(index, newObj);
  }

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
              handleSave={handleSave}
              handleComplete={handleComplete}
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
            onClick={() => setSelectedWorkout(workoutIndex)}
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
