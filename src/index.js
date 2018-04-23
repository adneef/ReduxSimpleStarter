import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

// Create a new component
const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  )
}

//Take this component's generated HTML and put it on the top of the page
ReactDOM.render(<App />, document.querySelector('.container'))
