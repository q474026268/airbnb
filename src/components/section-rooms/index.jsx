import React, { memo } from "react";
import propTypes from "prop-types";
import RoomItem from "@/components/room-item";
import { RoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [] } = props;
  return (
    <RoomsWrapper>
      {roomList?.slice(0, 8)?.map((item) => {
        return <RoomItem itemData={item} key={item.id} />;
      })}
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: propTypes.array,
};

export default SectionRooms;
