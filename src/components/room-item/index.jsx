import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { ItemWrapper } from "./style"

const RoomItem = memo((props)=> {
  const { itemData } = props
  return (
   <ItemWrapper> {itemData.name}</ItemWrapper>

  )
})
RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem