import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

export default function AdminPieChart() {
  return (
    <PieChart
      colors = {["red", "green", "blue"]}
      series={[
        {
          data: [
            { label: "Cue 1", value: 50 },
            { label: "Cue 2", value: 25 },
            { label: "Cue 3", value: 25 },
          ],
          highlightScope: { fade: "global", highlight: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "white" },
        },
      ]}
      height={200}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontWeight: "bold",
          color: "white",
        },
      }}
    />
  );
}
