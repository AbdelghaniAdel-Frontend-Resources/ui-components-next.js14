"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shadcn/ui/button";
import { Calendar } from "@/components/shadcn/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shadcn/ui/popover";

type DatePickerProps = {
  selected?: Date;
  onSelect?: (date?: Date) => void;
  placeholder?: string;
  className?: string;
  buttonClassName?: string;
  calendarClassName?: string;
  disabled?: boolean;
  fromDate?: Date;
  toDate?: Date;
  required?: boolean;
};

export function DatePicker({
  selected,
  onSelect,
  placeholder = "Pick a date",
  className,
  buttonClassName,
  calendarClassName,
  disabled = false,
  fromDate,
  toDate,
  required = false,
}: DatePickerProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            disabled={disabled}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !selected && "text-muted-foreground",
              buttonClassName
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selected ? format(selected, "PPP") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("w-auto p-0", calendarClassName)}>
          <Calendar
            mode="single"
            selected={selected}
            onSelect={onSelect}
            initialFocus
            fromDate={fromDate}
            toDate={toDate}
            required={required}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
