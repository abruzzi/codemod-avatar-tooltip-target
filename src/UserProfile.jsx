import {Avatar} from "./components/Avatar";
import React from "react";
import {Box, Inline, Stack} from "./components/Layout";

export const UserProfile = ({image, name, bio}) => {
  return (
    (<Box>
      <Inline>
        <Avatar image={image} name={name} />
        <Stack>
          <h4>{name}</h4>
          <p>{bio}</p>
        </Stack>
      </Inline>
    </Box>)
  );
}