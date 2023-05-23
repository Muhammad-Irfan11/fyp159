import { Box, Button, Typography, styled, Input, Link } from "@mui/material";
import { AttachFile } from "@mui/icons-material";
import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { formatDate2, formatTimeAMPM2 } from "../../utils/common-utils";
import {
  handleUploadTasks,
  updateTask,
  setPendingTask,
  setCompletedTask,
  removeFile,
} from "../../api/api";
import { ChatContext } from "../../context/ChatProvider";
import NavBar from "../NavBar";
function ViewTask(props) {
  const location = useLocation();
  const [taskFiles, setTaskFiles] = useState();

  const [tasks, setTasks] = useState();

  const { user } = useContext(ChatContext);

  useEffect(() => {
    setTasks(location.state);
  }, [location]);

  const handleUnUploadTask = async () => {
    let data3 = await setPendingTask({ id: location.state._id });
    setTasks(data3);
    console.log(data3);
  };

  const handleUploadTask = async () => {
    let result2 = await setCompletedTask({
      id: location.state._id,
    });
    setTasks(result2);

    console.log(result2);
  };

  const onFileChange = async (e) => {
    setTaskFiles(e.target.files);
  };

  useEffect(() => {
    const uploadTaskFiles = async () => {
      if (taskFiles) {
        const formData = new FormData();

        let filesKeys = Object.keys(taskFiles);
        for (let key in filesKeys) {
          formData.append("files", taskFiles[key]);
        }
        formData.append("files", taskFiles);
        console.log(formData);

        let data2 = await handleUploadTasks(formData);
        if (data2 && data2 !== "") {
          let result = await updateTask({
            id: location.state._id,
            filesNameArr: data2,
          });
          setTasks(result);

          console.log(result);
        }
      }
    };
    uploadTaskFiles();
  }, [taskFiles]);

  const handleRemoveFile = async (task_id, file_name) => {
    const data = await removeFile(task_id, file_name);
    if (data) setTasks(data);
  };

  return (


    <Box sx={{ display: "flex", height: "100vh",bgcolor:"lightgrey" }}>
    <Box sx={{ width: "20%", backgroundColor: "#28282B" }}>
      <NavBar />
    </Box>
    <Box
      sx={{
        
        color: "black",
        padding: "20px",
        width: "80%",
        width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
        margin: "20px auto",
        marginBottom: "10px",
        maxWidth: { xs: "100%", sm: "90%", md: "70%", lg: "50%" },
      }}
    >
      <div style={{
          gcolor: "white",
            color: "black",
            padding: "20px",
            width: "50%",
            margin: "auto",
            marginTop: "20%",
            boxShadow: "0 2px 4px #052f72",
            borderRadius:"10px",
            justifyContent:'center',
            alignItems:"center",
            textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor:"white",
        }}>
      <Typography style={{fontSize:40,fontWeight:'bold'}}> "{location.state.title}" </Typography>
      <Typography variant="h6">Description: {location.state.description}</Typography>
      
     
      <Typography>Due: {formatDate2(location.state.deadline)},{formatTimeAMPM2(location.state.deadline)}</Typography>
      
      {user.type === "Student" && tasks && tasks.taskStatus === "Pending" && (
        <Box>
          <label htmlFor="fileInput">Upload</label>
          <form method="post" encType="multipart/form-data">
            <input
              type="file"
              name="files"
              multiple
              style={{ display: "none" }}
              id="fileInput"
              onChange={(e) => onFileChange(e)}
            />
          </form>
        </Box>
      )}
      {user.type === "Student" && tasks && tasks.taskStatus === "Pending" && (
        <Button onClick={handleUploadTask}>Submit Task</Button>
      )}
      {user.type === "Student" &&
        tasks &&
        tasks.taskStatus === "Completed" && (
          <Button onClick={handleUnUploadTask}>Unsubmit Task</Button>
        )}
      <Box>
        {tasks &&
          tasks.filespaths.length !== 0 &&
          tasks.filespaths.map((task, index) => {
            return (
              <Box key={index}>
                <Link href={task} target="_blank" rel="noopener">
                  {task.split("--").pop()}
                </Link>
                {tasks.taskStatus === "Pending" && (
                  <Button
                    key={"remove file" + index}
                    onClick={() => {
                      handleRemoveFile(tasks._id, task);
                    }}
                  >
                    Delete
                  </Button>
                )}
              </Box>
            );
          })}
      </Box>
      </div>
    </Box>
  </Box>
  );
}

export default ViewTask;