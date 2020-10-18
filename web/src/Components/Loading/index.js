import React from 'react'

import LoadingGif from '../../assets/images/loading.gif'
import * as Styled from './styles'

export default function Loading() {
  return (
    <Styled.loading>
      <img src={LoadingGif} alt="" />
    </Styled.loading>
  )
}
