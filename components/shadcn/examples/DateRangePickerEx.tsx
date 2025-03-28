"use client";
import React from "react";
import { DateRangePicker } from "../wrappers/DateRangePicker";
import { DateRange } from "react-day-picker";

const DateRangePickerEx = () => {
  const [range, setRange] = React.useState<DateRange>();

  return (
    <div>
      <DateRangePicker value={range} onChange={(range) => setRange(range)} />
    </div>
  );
};

export default DateRangePickerEx;
