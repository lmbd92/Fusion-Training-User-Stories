import React, { Fragment } from "react";
import { useAppContext } from "fusion:context";

export default function Header() {
  const appContext = useAppContext();
  const { globalContent } = appContext;

  console.log(globalContent);

  return (
    <article className="card">
      <div className="card-body">
        <h2 className="card-title">{globalContent.headlines.basic}</h2>
        <h5 className="card-text">{globalContent.subheadlines.basic}</h5>
      </div>
    </article>
  );
}
