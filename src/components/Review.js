import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import Turn1 from './Turn1'
import Turn2 from './Turn2'
import Turn3 from './Turn3'
import Turn4 from './Turn4'
import Turn5 from './Turn5'
import Turn6 from './Turn6'
import Turn7 from './Turn7'
import Turn8 from './Turn8'

function Review() {
  const [turn, setturn] = useState(false)
  return (
    <div>
      <div>
        <Turn1 turn={turn} />
        <Turn2 turn={turn} />
        <Turn3 turn={turn} />
        <Turn4 turn={turn} />
        <Turn5 turn={turn} />
        <Turn6 turn={turn} />
        <Turn7 turn={turn} />
        <Turn8 turn={turn} />
      </div>

      <div>
        {' '}
        {!turn ? (
          <span
            onClick={() => setturn(true)}
            style={{ cursor: 'pointer', marginTop: '50px' }}
          >
            {' '}
            Show Add-ons <BsChevronDown />{' '}
          </span>
        ) : (
          <span onClick={() => setturn(false)} style={{ cursor: 'pointer' }}>
            Hide Add-ons <BsChevronUp />{' '}
          </span>
        )}
      </div>
    </div>
  )
}

export default Review
