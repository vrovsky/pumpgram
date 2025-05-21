import React from "react";

export default function Layout(props) {
  const { children } = props;
  const header = (
    <header>
      <h1 className="text-gradient">The Pumpgram</h1>
      <p>
        <strong>The 30 Simple Workouts Program </strong>
      </p>
    </header>
  );
  const footer = (
    <footer>
      <p>
        Built by{" "}
        <a target="_blank" href="https://vrovsky.netlify.app">
          Vrovsky
        </a>
        <br />
        Styled with{" "}
        <a target="_blank" href="https://fantacss.smoljames.com">
          FantaCSS
        </a>
      </p>
    </footer>
  );

  return (
    <div>
      {header}
      {children}
      {footer}
    </div>
  );
}
