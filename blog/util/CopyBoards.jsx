import React from 'react'

function CopyBoards() {
  return (
    <CopyToClipboard>
      {children}
    </CopyToClipboard>
  )
}

export default CopyBoards;
