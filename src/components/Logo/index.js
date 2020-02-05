import React from 'react'
import { Svg } from './style'
import { Link } from '@reach/router'

export const Logo = (props) => {
  return (
  <Link to='/'>
    <Svg
      width={281.736}
      height={121.405}
      viewBox='109.132 14.297 281.736 121.405'
      style={{
        background: '0 0'
      }}
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <defs>
        <linearGradient
          id='prefix__editing-gradow-gradient'
          x1={0}
          x2={1}
          y1={0.5}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#671567' />
          <stop offset={1} stopColor='#fffb04' />
        </linearGradient>
        <filter
          id='prefix__editing-gradow-filter'
          x='-100%'
          y='-100%'
          width='300%'
          height='300%'
        >
          <feFlood floodColor='#fffcd9' result='flood' />
          <feComposite
            operator='in'
            in2='SourceAlpha'
            in='flood'
            result='shadow'
          />
          <feOffset dx={-4} dy={-4} in='SourceGraphic' result='offset-1' />
          <feOffset dx={4} dy={4} in='shadow' result='offset-2' />
          <feMerge>
            <feMergeNode in='offset-2' />
            <feMergeNode in='offset-1' />
          </feMerge>
        </filter>
      </defs>
      <g filter='url(#prefix__editing-gradow-filter)'>
        <path
          d='M30.91-4.38q-2.69 2.72-6.37 4.19-3.68 1.47-7.32 1.47-3.65 0-4.93-.64L10.3 11.52-2.69 12.8l8.83-45.44 10.44-1.09-.84 4.42q2.69-4.55 8.26-4.55 6.27 0 9.6 4.04 2.94 3.64 2.94 9.21t-1.47 9.54Q33.6-7.1 30.91-4.38zM16.45-22.34L13.06-3.58q1.34 1.15 3 1.15 1.67 0 2.63-.64t1.66-1.92q1.92-3.46 3.46-13.95.45-3.08.45-6.08 0-3.01-.68-3.97-.67-.96-1.95-.96-3.9 0-5.18 7.61zM66.3-10.82q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.24-15.55 5.64-6.34 15.43-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.26 1.66-.26 3.07 0 2.95 1.32 4.07 1.31 1.12 3.74 1.12t5.02-1.12q2.6-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.64-.8-1.08 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zM75.46-6.4q0-1.73.89-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h5l-.58 2.88h-4.93l-3.26 17.28q-.83 3.97-.83 5.31 0 3.07 2.68 3.71Q90.3-1.28 88 0q-2.3 1.28-5.57 1.28-3.26 0-5.12-2.05-1.85-2.05-1.85-5.63zm37.37 2.88q-1.98 4.8-8.32 4.8-3.2 0-5.25-2.24-1.66-1.86-1.66-3.97 0-4.8 2.24-15.29l4.67-24.58 12.99-1.28-6.2 32.38q-1.09 4.74-1.09 6.4 0 3.65 2.62 3.78zm31.36-7.3q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.52 2.11-4.41 0-7-.96-2.6-.96-4.32-2.75-3.4-3.39-3.4-9.6 0-9.67 5.25-15.55 5.63-6.34 15.43-6.34 6.08 0 9.08 2.56 2.24 1.92 2.24 5.06 0 11.26-19.45 11.26-.26 1.66-.26 3.07 0 2.95 1.31 4.07 1.32 1.12 3.75 1.12 2.43 0 5.02-1.12 2.59-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.16-2.82 2.63-2.69 2.63-6.97 0-1.48-.55-2.28-.54-.8-1.63-.8-1.09 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zm35.13 19.07q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.51 16.19-5.37 5.89-14.59 5.89zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.38 6.69-.76 4.09-.76 9.15 0 1.66.54 2.75t2.02 1.09q1.47 0 2.4-.7.92-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.52-1.15-1.96-1.15t-2.4.9q-.96.89-1.72 2.62z'
          fill='url(#prefix__editing-gradow-gradient)'
          transform='translate(156.465 104.44)'
        />
      </g>
      <style />
    </Svg>
  </Link >
  )
}

export default Logo