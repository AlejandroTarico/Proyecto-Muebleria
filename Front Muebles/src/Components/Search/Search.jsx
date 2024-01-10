import React from 'react'

function Search() {
  return (
    <>
        <input className='bg-inherit outline-none border-b focus:bg-slate-200 focus:border-none focus:rounded-xl focus:pl-2 border-gray-400 w-96 h-8' type="text" placeholder='¿Que buscas?'/>
        <button>
            <svg class="h-6 w-10 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
        </button>
    </>
  )
}

export default Search