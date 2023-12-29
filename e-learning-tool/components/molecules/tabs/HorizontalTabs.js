import React from "react";
import { Tabs, Tab, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

const HorizontalTabs = ({ data,isDynamic=true }) => {
  const router = useRouter();
  const [active, setActive] = React.useState(0);
  const [id, setId] = React.useState("");
  // Set Active Menu
  React.useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (router.pathname.includes(data[i].path)) {
        setActive(i);
      }
    }
  }, [router.pathname]);

  // Change dynamic route
  React.useEffect(() => {
   
    if (router.query.id&&isDynamic) {
      let id = "/" + router.query.id;
       setId(id);
    } else {
      setId("");
    }
  }, [router.query.id]);

  return (
    <Box>
      <Tabs
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        textColor="primary"
        value={active}
      >
        {data.map((item, index) => {
          return (
            <Link href={item.path + id} key={index}>
              <Tab label={<Typography color={active===index?'primary':'black'}>{item.label}</Typography>} />
            </Link>
          );
        })}
      </Tabs>
    </Box>
  );
};

export default HorizontalTabs;
