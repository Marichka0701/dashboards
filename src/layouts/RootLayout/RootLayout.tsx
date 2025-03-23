import CssBaseline from "@mui/material/CssBaseline";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const RootLayout = () => {
  const size = useWindowSize();
  const [open, setOpen] = useState<boolean>(size.width && size.width > 768 ? true : false);

  useEffect(() => {
    setOpen(!!(size.width && size.width > 768));
  }, [size.width]);

  return (
    <div className="flex min-h-screen">
      <CssBaseline />
      <Sidebar
        open={open}
        setOpen={setOpen}
      />

      <Outlet context={{ open, setOpen }} />
    </div>
  );
};
