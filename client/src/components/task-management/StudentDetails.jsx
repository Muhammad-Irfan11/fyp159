import { Box, Typography, Button, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getTasks } from "../../api/api";
import { useContext } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ChatContext } from "../../context/ChatProvider";
import { formatDate2, formatTimeAMPM2 } from "../../utils/common-utils";
import SupervisorNavbar from "../Navbar/SupervisorNavbar";

function StudentDetails(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(ChatContext);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [unapprovedTasks, setUnapprovedTasks] = useState([]);

  const handleNavigateToStudentTask = (value) => {
    navigate("/sup-eva-view-task", { state: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      const tasks = await getTasks({
        assignedBy: user.id,
        assignedTo: location.state._id,
      });
      const completed = tasks.filter((task) => task.taskStatus === "Completed" && task.taskApproval === "Approved");
      const pending = tasks.filter((task) => task.taskStatus === "Pending");
      const unapproved = tasks.filter((task) => task.taskStatus === "Completed" && (task.taskApproval === "Pending" || task.taskApproval === "Disapproved"));

      setCompletedTasks(completed);
      setPendingTasks(pending);
      setUnapprovedTasks(unapproved);
    };

    fetchData();
  }, [location.state._id, user.id]);

  return (
    <Box display="flex" height="100vh">
    <Box style={{ width: "20%", backgroundColor: "#28282B" }}>
      <SupervisorNavbar />
    </Box>
  
    <Box sx={{ bgcolor: "lightgrey", padding: "20px", marginBottom: "10px", width: "80%", height: "100%" }}>
      <Box sx={{ marginBottom: "20px", bgcolor:"white" }}>
        <Typography variant="h6" sx={{ color: "white",textAlign: "center", bgcolor: "green", padding: "5px", borderRadius: "4px" }}>
          Completed Tasks
        </Typography>
  
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {completedTasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{task.title}</TableCell>
                <TableCell align="center">{formatDate2(task.deadline)}</TableCell>
                <TableCell align="center">{formatTimeAMPM2(task.deadline)}</TableCell>
                <TableCell>
                <VisibilityIcon
                  onClick={() => handleNavigateToStudentTask(task)}
                  sx={{
                    color: "#052f72",
                    cursor: "pointer",
                    fontSize: 20,
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
  
      <Box sx={{ marginBottom: "20px",bgcolor:"white" }}>
        <Typography variant="h6" sx={{ color: "white",textAlign: "center" ,bgcolor: "#FF0000", padding: "5px", borderRadius: "4px" }}>
          Pending Tasks
        </Typography>
  
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingTasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{task.title}</TableCell>
                <TableCell align="center">{formatDate2(task.deadline)}</TableCell>
                <TableCell align="center">{formatTimeAMPM2(task.deadline)}</TableCell>
                <TableCell>
                <VisibilityIcon
                  onClick={() => handleNavigateToStudentTask(task)}
                  sx={{
                    color: "#052f72",
                    cursor: "pointer",
                    fontSize: 20,
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
  
      <Box sx={{bgcolor:"white"}} >
        <Typography variant="h6" sx={{ color: "white",textAlign: "center", bgcolor: "#FF0000", padding: "5px", borderRadius: "4px" }}>
          Unapproved Tasks
        </Typography>
  
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {unapprovedTasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{task.title}</TableCell>
                <TableCell align="center">{formatDate2(task.deadline)}</TableCell>
                <TableCell align="center">{formatTimeAMPM2(task.deadline)}</TableCell>
                <TableCell>
                <VisibilityIcon
                  onClick={() => handleNavigateToStudentTask(task)}
                  sx={{
                    color: "#052f72",
                    cursor: "pointer",
                    fontSize: 20,
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  </Box>
  
  );
}

export default StudentDetails;
