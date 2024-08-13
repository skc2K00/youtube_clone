import React from 'react'

const Suggestions = (props) => {

    const searchResults = props.data;

  return (
    <div className='absolute left-[39vw] border-black border-2 w-[400px] h-[300px] p-1 rounded-lg backdrop-blur'>
        <ul>
            {searchResults.map((result) => (
                <li>{result}</li>
            ))}
        </ul>
    </div>
  )
}

export default Suggestions