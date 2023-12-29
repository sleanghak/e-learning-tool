import { Box, Typography } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

const UserPage = () => {
  return (
    <Box>
      <Typography>Authentication</Typography>
    </Box>
  );
};

export default UserPage;

function ButtonAuth() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
