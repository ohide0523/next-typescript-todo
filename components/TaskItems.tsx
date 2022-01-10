import React from 'react'
import firebase from "firebase/compat/app";
import {ListItem,TextField,Grid} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

interface PROPS{
    id:string;
    title:string;
}

const TaskItems:React.FC<PROPS> = (props) => {
    return (
        <div>
            <ListItem><h2>{props.title}</h2></ListItem>
        </div>
    )
}

export default TaskItems
