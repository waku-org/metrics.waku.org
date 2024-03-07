import React from "react";
import Percentage from "@/components/molecules/Percentage";

import { Card } from "@acid-info/lsd-react";


export default function OverviewCard(props) {
  return (
    <div className="flex md:w-auto items-end justify-between border p-6">
      <div className="flex items-center gap-4">
        {props.icon}

        <div className="space-y-3">
          <p className="text-sm text-[#707071] dark:text-gray-400">
            {props.title}
          </p>

          <p className="text-2xl font-medium text-gray-900 dark:text-white">
            {props.isLoading ? "..." : props.current}
          </p>
        </div>
      </div>
      <Percentage previous={props.previous} current={props.current} />
    </div>
  );
}
