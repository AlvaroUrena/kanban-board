import { useState } from 'react'
import Card from './components/Card'

type columnsType = {
  name: string
  text: string
}[]

const columns: columnsType = [
  {
    name: 'toDo',
    text: 'To Do 🗒️'
  },
  {
    name: 'inProgress',
    text: 'In Progress ⏳'
  },
  {
    name: 'done',
    text: 'Done ✅'
  }
]

type cardType = {
  text: string
  column: 'toDo' | 'inProgress' | 'done'
}

export default function App() {
  const [cards, setCards] = useState<cardType[]>([
    {
      text: 'sogksgjsggsgsg',
      column: 'toDo'
    }
  ])

  return (
    <>
      <h1 className='text-center text-6xl font-bold'>Kanban Board</h1>
      <div className='grid w-screen max-w-[75dvw] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-items-start gap-6'>
        {columns.map(column => (
          <section
            key={column.name}
            className='h-full w-full gap-3 rounded-md border-2 border-slate-800 bg-slate-500 p-6'
          >
            <h2 className='mb-2 text-center text-2xl'>{column.text}</h2>
            <div className='h-[30rem] gap-3 rounded-md bg-slate-600 p-4'>
              {cards
                .filter(card => card.column === column.name)
                .map(card => (
                  <Card key={card.column}>{card.text}</Card>
                ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
