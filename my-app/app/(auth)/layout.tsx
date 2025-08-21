import { ReactNode } from "react";
export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>header</h1>
      {children}
      <h1>Footer</h1>
    </>
  );
}
