import { useState } from "react";
import Intro from "./intro.jsx";
import Profile from "./profile.jsx";
import Page3 from "./page3.jsx";

export default function App() {
  const [page, setPage] = useState("intro");

  return (
    <div style={{ padding: 20 }}>
      
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setPage("intro")}>Page 1 - Intro</button>
        <button onClick={() => setPage("profile")}>Page 2 - Profile</button>
        <button onClick={() => setPage("page3")}>Page 3</button>
      </div>

      {page === "intro" && <Intro />}
      {page === "profile" && <Profile />}
      {page === "page3" && <Page3 />}
    </div>
  );
}
