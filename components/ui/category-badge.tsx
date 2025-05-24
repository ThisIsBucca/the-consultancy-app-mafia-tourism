interface CategoryBadgeProps {
  category: string
}

export const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const getBadgeStyle = (cat: string) => {
    switch (cat) {
      case "Premium":
        return "bg-purple-100 text-purple-800"
      case "Seasonal":
        return "bg-green-100 text-green-800"
      case "Cultural":
        return "bg-orange-100 text-orange-800"
      case "Historical":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  return <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeStyle(category)}`}>{category}</span>
}
