import React from 'react';
import {UserProfile} from "./UserProfile";

const App = () => (
  <div className="app">
    <h1>Recent friends</h1>
    <UserProfile
      name="Juntao Qiu"
      image="https://www.icodeit.com.au/_next/image?url=%2Fjuntao.qiu.avatar.png&w=256&q=75"
      bio="I love writing code"
    />
    <UserProfile
      name="Jane Doe"
      image="https://randomuser.me/api/portraits/women/1.jpg"
      bio="A passionate UI/UX designer who enjoys creative problem solving."
    />
    <UserProfile
      name="John Smith"
      image="https://randomuser.me/api/portraits/men/2.jpg"
      bio="Full-stack developer with expertise in React and Node.js."
    />
    <UserProfile
      name="Alice Brown"
      image="https://randomuser.me/api/portraits/women/3.jpg"
      bio="Frontend developer focused on creating accessible and performant web apps."
    />
  </div>
);


export default App;
