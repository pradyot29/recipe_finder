
import { useState, useEffect } from 'react'
import Hero from './Hero'
import SearchBar from './SearchBar'
import RecipeGrid from './RecipeGrid'

type Meal = {
  strMeal: string
  strMealThumb: string
  idMeal: string
}

export default function RecipeFinder() {
  const [meals, setMeals] = useState<Meal[]>([])
  const [favorites, setFavorites] = useState<Meal[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showFavorites, setShowFavorites] = useState(false)

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  const searchRecipes = async (ingredient: string) => {
    if (!ingredient.trim()) return

    setLoading(true)
    setError('')
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`)
      if (!response.ok) throw new Error('Failed to fetch recipes')
      const data = await response.json()
      setMeals(data.meals || [])
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.')
      setMeals([])
    } finally {
      setLoading(false)
    }
  }

  const toggleFavorite = (meal: Meal) => {
    const newFavorites = favorites.some(fav => fav.idMeal === meal.idMeal)
      ? favorites.filter(fav => fav.idMeal !== meal.idMeal)
      : [...favorites, meal]
    setFavorites(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <div className="container mx-auto p-4 max-w-4xl">
        <Hero />
        <SearchBar onSearch={searchRecipes} loading={loading} />
        <div className="mb-4 flex justify-center">
          <button
            onClick={() => setShowFavorites(false)}
            className={`px-4 py-2 rounded-l-lg ${!showFavorites ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Search Results
          </button>
          <button
            onClick={() => setShowFavorites(true)}
            className={`px-4 py-2 rounded-r-lg ${showFavorites ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Favorites ({favorites.length})
          </button>
        </div>
        {error && <p className="text-red-500 text-center mb-4 bg-red-100 p-4 rounded-lg">{error}</p>}
        <RecipeGrid 
          meals={showFavorites ? favorites : meals} 
          loading={loading} 
          onToggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      </div>
    </div>
  )
}