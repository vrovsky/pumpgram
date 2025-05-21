import React from "react";

export default function WorkoutCard(props) {
  const { trainingPlan, workoutIndex, type } = props;
  const { warmup, workout } = trainingPlan || {};
  return (
    <div className="workout-container">
      <div className="workout-card card">
        <div className="plancard-header">
          <p>Day {dayNum}</p>
          {icon}
        </div>
      </div>
    </div>
  );
}
