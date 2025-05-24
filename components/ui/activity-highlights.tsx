interface ActivityHighlightsProps {
  highlights: string[]
}

export const ActivityHighlights = ({ highlights }: ActivityHighlightsProps) => (
  <div className="mb-4">
    <div className="flex flex-wrap gap-2">
      {highlights.map((highlight, index) => (
        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
          {highlight}
        </span>
      ))}
    </div>
  </div>
)
