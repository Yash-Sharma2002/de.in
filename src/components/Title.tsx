import React from "react";

export default function Title(props: { title: string }) {
  return (
    <>
      <title>{props.title}</title>
      </>
  );
}
