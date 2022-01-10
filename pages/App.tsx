import React, { useState, useEffect } from "react";
import { db } from "../components/firebase";

const App: React.FC = () => {
  const [tasks, setTasks] = useState([{ id: "", title: "" }]);
  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
      );
    });
    return () => unSub();
  }, []);
  return (
    <div>
      {tasks.map((task,index) => (
        <h3 key={index}>{task.title}</h3>
      ))}
    </div>
  );
};

export default App;
