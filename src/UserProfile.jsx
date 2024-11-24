import { Tooltip } from "@design-system/tooltip";
import {Avatar} from "./components/Avatar";
import React from "react";
import {Box, Inline, Stack} from "./components/Layout";

export const UserProfile = ({image, name, bio}) => {
  return (
    <Box>
        <Inline>
          <Tooltip content={name}><Avatar image={image} /></Tooltip>
          <Stack>
            <h4>{name}</h4>
            <p>{bio}</p>
          </Stack>
        </Inline>
      </Box>
  );
}