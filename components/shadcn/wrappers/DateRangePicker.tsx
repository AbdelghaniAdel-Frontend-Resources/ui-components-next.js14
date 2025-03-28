"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/shadcn/ui/button";
import { Calendar } from "@/components/shadcn/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shadcn/ui/popover";

type DateRangePickerProps = {
  className?: string;
  buttonClassName?: string;
  calendarClassName?: string;
  value?: DateRange;
  onChange?: (range: DateRange | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  defaultRange?: DateRange;
  minDays?: number;
  maxDays?: number;
  disabledDates?: Date[];
  numberOfMonths?: number;
  showReset?: boolean;
  align?: "start" | "center" | "end";
};

export function DateRangePicker({
  className,
  buttonClassName,
  calendarClassName,
  value,
  onChange,
  placeholder = "Pick a date range",
  disabled = false,
  defaultRange,
  minDays,
  maxDays,
  disabledDates,
  numberOfMonths = 2,
  showReset = false,
  align = "start",
}: DateRangePickerProps) {
  const [internalRange, setInternalRange] = React.useState<DateRange | undefined>(
    defaultRange ?? {
      from: new Date(),
      to: addDays(new Date(), 7),
    }
  );

  const range = value ?? internalRange;
  const setRange = onChange ?? setInternalRange;

  const handleReset = () => {
    setRange(undefined);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            disabled={disabled}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !range?.from && "text-muted-foreground",
              buttonClassName
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {range?.from ? (
              range.to ? (
                <>
                  {format(range.from, "LLL dd, y")} - {format(range.to, "LLL dd, y")}
                </>
              ) : (
                format(range.from, "LLL dd, y")
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("w-auto p-0", calendarClassName)} align={align}>
          <div className="flex flex-col">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={range?.from}
              selected={range}
              onSelect={setRange}
              numberOfMonths={numberOfMonths}
              disabled={disabledDates}
              min={minDays}
              max={maxDays}
            />
            {showReset && (
              <Button variant="ghost" onClick={handleReset} className="mt-2 self-end" size="sm">
                Reset
              </Button>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
