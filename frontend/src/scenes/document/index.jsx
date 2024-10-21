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
        <Header title="Document" subtitle="Welcome to your document" />
      </Box>

      <Link to="/" className="button is-info m-5"><FolderIcon/>Document Perusahaan</Link>

    </Box>
  );
};

export default Dashboard;
