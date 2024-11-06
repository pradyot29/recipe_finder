import RecipeCard from './RecipeCard'

type Meal = {
  strMeal: string
  strMealThumb: string
  idMeal: string
}

type RecipeGridProps = {
  meals: Meal[]
  loading: boolean
  onToggleFavorite: (meal: Meal) => void
  favorites: Meal[]
}

export default function RecipeGrid({ meals, loading, onToggleFavorite, favorites }: RecipeGridProps) {
  return (
    <div>
      {meals.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <RecipeCard 
              key={meal.idMeal} 
              meal={meal} 
              onToggleFavorite={onToggleFavorite}
              isFavorite={favorites.some(fav => fav.idMeal === meal.idMeal)}
            />
          ))}
        </div>
      )}
      {meals.length === 0 && !loading && (
        <p className="text-center text-gray-600 bg-white p-4 rounded-lg shadow">
          No recipes found. Try searching for a different ingredient!
        </p>
      )}
    </div>
  )
}