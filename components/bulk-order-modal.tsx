"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Users, Calendar, Package, ArrowRight } from "lucide-react"

export default function BulkOrderModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Join a Bulk Order Group</DialogTitle>
          <DialogDescription>
            Collaborate with other businesses to place a bulk order and save on costs while reducing environmental
            impact.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Available Bulk Order Groups</h3>

            <div className="space-y-4">
              <BulkOrderGroup
                name="Eco Food Packaging Collective"
                product="Compostable Food Containers"
                members={8}
                target={15}
                deadline="May 15, 2025"
                discount="15%"
              />

              <BulkOrderGroup
                name="Green Retail Alliance"
                product="Recycled Paper Bags"
                members={12}
                target={20}
                deadline="May 20, 2025"
                discount="20%"
              />

              <BulkOrderGroup
                name="Sustainable Shipping Network"
                product="Biodegradable Mailers"
                members={5}
                target={10}
                deadline="May 10, 2025"
                discount="12%"
              />
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Create a New Bulk Order Group</h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="group-name">Group Name</Label>
                <Input id="group-name" placeholder="Enter a name for your group" />
              </div>

              <div>
                <Label htmlFor="product">Product</Label>
                <Input id="product" placeholder="Select product for bulk order" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="target-members">Target Members</Label>
                  <Input id="target-members" type="number" min="2" placeholder="10" />
                </div>
                <div>
                  <Label htmlFor="deadline">Order Deadline</Label>
                  <Input id="deadline" type="date" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">Create Group</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function BulkOrderGroup({
  name,
  product,
  members,
  target,
  deadline,
  discount,
}: {
  name: string
  product: string
  members: number
  target: number
  deadline: string
  discount: string
}) {
  return (
    <div className="border rounded-lg p-4 hover:border-green-200 hover:bg-green-50 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{product}</p>
        </div>
        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
          {discount} discount
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
        <div className="flex items-center">
          <Users className="h-4 w-4 text-gray-500 mr-1" />
          <span>
            {members}/{target} members
          </span>
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 text-gray-500 mr-1" />
          <span>Due: {deadline}</span>
        </div>
        <div className="flex items-center">
          <Package className="h-4 w-4 text-gray-500 mr-1" />
          <span>MOQ: 1000</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(members / target) * 100}%` }}></div>
        </div>
        <p className="text-xs text-gray-600 mt-1">{target - members} more members needed to reach target</p>
      </div>

      <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
        Join Group <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

