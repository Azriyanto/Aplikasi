import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Desktop from "./scenes/desktop";
import Gallery from "./scenes/gallery";
import Download from "./scenes/download";
import Document from "./scenes/document";
import Pictures from "./scenes/pictures";
import Music from "./scenes/music";
import Videos from "./scenes/videos";
import Network from "./scenes/network";
import Userprofil from "./scenes/userprofil";
import AddUser from "./scenes/userprofil/addUsers"
import EditUser from "./scenes/userprofil/edituser"
import Addimage from "./scenes/gallery/addimage";
import Editimage from "./scenes/gallery/editimage";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/desktop" element={<Desktop />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/download" element={<Download />} />
              <Route path="/document" element={<Document />} />
              <Route path="/pictures" element={<Pictures />} />
              <Route path="/addimage" element={<Addimage />} />
              <Route path="/editimage/:id" element={<Editimage />} />
              <Route path="/music" element={<Music />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/network" element={<Network />} />
              <Route path="/userprofil" element={<Userprofil />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/userprofil/addUsers" element={<AddUser />} />
              <Route path="/userprofil/edituser/:id" element={<EditUser />} />
              {/* <Route path="/calendar" element={<Calendar />} /> */}
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
