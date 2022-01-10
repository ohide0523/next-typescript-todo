import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { ListItem, TextField, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { db } from "./firebase";

interface PROPS {
  id: string;
  title: string;
}

const TaskItems: React.FC<PROPS> = (props) => {
  const [title, setTitle] = useState(props.title);

  const editTask=()=>{
      db.collection("tasks").doc(props.id).set({title:title},{merge:true})
  }

  const deleteTask = ()=>{
      db.collection("tasks").doc(props.id).delete()
  }
  return (
    <div>
      <ListItem>
        <h2>{props.title}</h2>
        <Grid container justifyContent="flex-end">
          <TextField
            label="Edit task"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>
        <button onClick={editTask}>
            <CreateIcon/>
        </button>
        <button onClick={deleteTask}>
            <DeleteIcon/>
        </button>
      </ListItem>
    </div>
  );
};

export default TaskItems;
