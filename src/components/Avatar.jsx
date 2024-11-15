import React from 'react';
import {Tooltip} from "./Tooltip";

const AvatarInternal = ({alt, image}) => {
  return (
    <div className="avatar">
      <img src={image} alt={alt}/>
    </div>
  );
}
export const Avatar = ({name, image}) => {
  if (name) {
    return (<Tooltip content={name}>
      <AvatarInternal alt={name} image={image}/>
    </Tooltip>)
  }

  return <AvatarInternal alt='Avatar' image={image}/>
};
