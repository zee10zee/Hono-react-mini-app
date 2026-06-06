import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React from "react"

export function DatePicker({ name = "dob" }) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState("") // Store as YYYY-MM-DD string

  const handleDateSelect = (selectedDate) => {
    if (selectedDate) {
      // Store as YYYY-MM-DD for form submission
      const formattedDate = selectedDate.toISOString().split('T')[0]
      setDate(formattedDate)
    } else {
      setDate("")
    }
    setOpen(false)
  }

  // Convert stored date string back to Date object for display
  const displayDate = date ? new Date(date) : undefined

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-[50%] justify-start font-normal"
          >
            {displayDate 
              ? displayDate.toLocaleDateString() 
              : "Select date of birth"
            }
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={displayDate}
            defaultMonth={displayDate}
            captionLayout="dropdown"
            onSelect={handleDateSelect}
            fromYear={1950}
            toYear={new Date().getFullYear()}
          />
        </PopoverContent>
      </Popover>
      
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={date} />
    </>
  )
}