import React from 'react'

function Search() {
  return (
    <>
        <input className='bg-inherit outline-none border-b focus:bg-slate-200 focus:border-none focus:rounded-xl focus:pl-2 border-white w-96 h-8 placeholder-white focus:placeholder-zinc-800 focus:text-slate-900' type="text" placeholder='¿Que buscas?'/>
        <button>
            <svg className="h-6 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
        </button>
    </>
  )
}

export default Search