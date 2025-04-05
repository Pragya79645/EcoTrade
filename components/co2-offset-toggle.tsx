"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Leaf, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function CO2OffsetToggle() {
  const [enabled, setEnabled] = useState(true)

  return (
    <div className="bg-green-50 rounded-lg p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-4 w-4 text-green-600" />
          <Label htmlFor="co2-offset" className="text-sm font-medium text-gray-900">
            Carbon Offset
          </Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="text-sm">
                  We partner with verified carbon offset projects to neutralize the emissions from your order's
                  production and shipping.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Switch id="co2-offset" checked={enabled} onCheckedChange={setEnabled} />
      </div>
      {enabled && (
        <div className="mt-2 text-xs text-green-700">+$3.50 to offset approximately 35kg of CO₂ emissions</div>
      )}
    </div>
  )
}

