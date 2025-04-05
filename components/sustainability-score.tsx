"use client"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

export default function SustainabilityScore({ score }: { score: number }) {
  // Determine color based on score
  const getColor = () => {
    if (score >= 9) return "bg-green-600"
    if (score >= 7) return "bg-green-500"
    if (score >= 5) return "bg-yellow-500"
    if (score >= 3) return "bg-orange-500"
    return "bg-red-500"
  }

  // Determine label based on score
  const getLabel = () => {
    if (score >= 9) return "Excellent"
    if (score >= 7) return "Good"
    if (score >= 5) return "Average"
    if (score >= 3) return "Fair"
    return "Poor"
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
            <div className={`h-4 w-4 rounded-full ${getColor()}`}></div>
            <span className="text-sm font-medium">Eco Score: {score}/10</span>
            <Info className="h-4 w-4 text-gray-500" />
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div className="space-y-2">
            <p className="font-semibold">{getLabel()} Sustainability Rating</p>
            <p className="text-sm">
              This score evaluates the product's environmental impact based on materials, manufacturing process,
              recyclability, and carbon footprint.
            </p>
            <div className="pt-1">
              <div className="flex justify-between text-xs">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
                <div className={`h-2 rounded-full ${getColor()}`} style={{ width: `${score * 10}%` }}></div>
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

