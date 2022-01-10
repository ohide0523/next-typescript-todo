import { Button, FormControl, List, TextField } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import React, { useState, useEffect } from "react";
import { db } from "../components/firebase";
import TaskItems from "../components/TaskItems";

const App: React.FC = () => {
  const [tasks, setTasks] = useState([{ id: "", title: "" }]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
      );
    });
    return () => unSub();
  }, []);

  const newTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    db.collection("tasks").add({ title: term });
    setTerm("");
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>todoリスト</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormControl>
          <TextField
            label="NEW task?"
            value={term}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTerm(e.target.value);
            }}
            InputLabelProps={{ shrink: true }}
          />
        </FormControl>
        <button disabled={!term} onClick={newTask}>
          <AddBoxIcon />
        </button>
      </div>

      <List>
        {tasks.map((task) => (
          <TaskItems key={task.id} id={task.id} title={task.title} />
        ))}
      </List>
    </div>
  );
};

export default App;
