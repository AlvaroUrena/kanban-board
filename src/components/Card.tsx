import React from 'react'

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='cursor-grab rounded-md bg-slate-800 p-4 active:animate-pulse active:cursor-grabbing'
      draggable='true'
    >
      <p>{children}</p>
    </div>
  )
}
