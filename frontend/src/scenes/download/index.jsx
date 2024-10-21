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
        <Header title="Download" subtitle="Welcome to your download" />
      </Box>

      <Link to="/" className="button is-info m-5"><FolderIcon/>Download Fille</Link>
      <Link to="/" className="button is-info m-5"><FolderIcon/>Download Musik</Link>
      <Link to="/" className="button is-info m-5"><FolderIcon/>Download Image</Link>
      <Link to="/" className="button is-info m-5"><FolderIcon/>Download video</Link>
      <Link to="/" className="button is-info m-5"><FolderIcon/>Download</Link>
      <Link to="/" className="button is-info m-5"><FolderIcon/>karya teknologi</Link>

    </Box>
  );
};

export default Dashboard;
