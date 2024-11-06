// import { Clock, ChefHat } from 'lucide-react'

// type Meal = {
//   strMeal: string
//   strMealThumb: string
//   idMeal: string
// }

// type RecipeCardProps = {
//   meal: Meal
// }

// export default function RecipeCard({ meal }: RecipeCardProps) {
//   return (
//     <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
//       <div className="relative">
//         <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//         <h3 className="absolute bottom-2 left-2 right-2 text-white font-semibold text-lg">{meal.strMeal}</h3>
//       </div>
//       <div className="p-4">
//         <div className="flex justify-between items-center text-sm text-gray-600">
//           <span className="flex items-center">
//             <Clock className="mr-1 h-4 w-4 text-green-500" /> 30-45 min
//           </span>
//           <span className="flex items-center">
//             <ChefHat className="mr-1 h-4 w-4 text-blue-500" /> Easy
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

import { useState } from 'react'
import { Clock, ChefHat, Heart } from 'lucide-react'

type Meal = {
  strMeal: string
  strMealThumb: string
  idMeal: string
}

type RecipeCardProps = {
  meal: Meal
  onToggleFavorite: (meal: Meal) => void
  isFavorite: boolean
}

export default function RecipeCard({ meal, onToggleFavorite, isFavorite }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <h3 className="absolute bottom-2 left-2 right-2 text-white font-semibold text-lg">{meal.strMeal}</h3>
        <button 
          onClick={() => onToggleFavorite(meal)} 
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span className="flex items-center">
            <Clock className="mr-1 h-4 w-4 text-green-500" /> 30-45 min
          </span>
          <span className="flex items-center">
            <ChefHat className="mr-1 h-4 w-4 text-blue-500" /> Easy
          </span>
        </div>
      </div>
    </div>
  )
}