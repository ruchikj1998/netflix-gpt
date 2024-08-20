import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'

export default function GPTSearch() {
  return (
    <div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  )
}
