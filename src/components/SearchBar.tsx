import { useState } from 'react'
import { Search } from 'lucide-react'

type SearchBarProps = {
  onSearch: (ingredient: string) => void
  loading: boolean
}

export default function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [ingredient, setIngredient] = useState('')

  const handleSearch = () => {
    onSearch(ingredient)
  }

  return (
    <div className="flex space-x-2 max-w-md mx-auto mb-8">
      <input
        type="text"
        placeholder="Enter an ingredient (e.g., chicken, tomato)"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        className="flex-grow text-lg py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        onClick={handleSearch}
        disabled={loading}
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {loading ? (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
        ) : (
          <Search className="w-4 h-4" />
        )}
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  )
}