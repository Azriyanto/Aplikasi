import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import FolderIcon from '@mui/icons-material/Folder';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Music" subtitle="Welcome to your music" />
      </Box>

      <Link to="/Music" className="button is-info m-5"><FolderIcon/>Lagu Lagu Jadul</Link>
      <Link to="/Music" className="button is-info m-5"><FolderIcon/>Lagu Lagu Batak</Link>
      <Link to="/Music" className="button is-info m-5"><FolderIcon/>Lagu Lagu Kesenian</Link>
      <Link to="/Music" className="button is-info m-5"><FolderIcon/>Lagu Lagu Santay</Link>

    </Box>
  );
};

export default Dashboard;
