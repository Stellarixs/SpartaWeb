import { Check, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface CalendarsProps {
  calendars: {
    name: string
    items: string[]
  }[]
}

export function Calendars({ calendars }: CalendarsProps) {
  return (
    <div className="p-4 pt-0">
      <div className="space-y-4">
        {calendars.map((calendar) => (
          <div key={calendar.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gold">{calendar.name}</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Add {calendar.name}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" align="end">
                  <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                          <p>Add to {calendar.name}</p>
                          <p className="text-sm text-muted-foreground">Create a new calendar.</p>
                        </CommandItem>
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="Calendars">
                        {["Personal", "Work", "Family"].map((item) => (
                          <CommandItem key={item}>
                            <div className="flex h-4 w-4 items-center justify-center">
                              <Check className="h-3 w-3" />
                            </div>
                            <span>{item}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-1">
              {calendar.items.map((item) => (
                <div
                  key={item}
                  className={cn(
                    "flex cursor-pointer items-center justify-between rounded-md px-2 py-1 text-sm hover:bg-red-900/20 hover:text-gold",
                  )}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
