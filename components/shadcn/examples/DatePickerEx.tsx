"use client";

import React from "react";
import { DatePicker } from "../wrappers/DatePicker";

const DatePickerEx = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <div>
      <DatePicker selected={date} onSelect={setDate} placeholder="Select a date" />
      <DatePicker
        selected={date}
        onSelect={setDate}
        fromDate={new Date()} // Only allow future dates
        placeholder="Select appointment date"
      />
      <DatePicker
        selected={date}
        onSelect={setDate}
        buttonClassName="bg-accent text-accent-foreground"
        calendarClassName="border-2 border-primary"
      />
    </div>
  );
};

export default DatePickerEx;
