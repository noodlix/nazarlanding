import React from "react";

export const Table = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <table className="table-auto border-collapse w-3/5">
        <thead>
          <tr>
            <th className="border px-1 py-1 text-xs">Advantage</th>
            <th className="border px-1 py-1 text-xs">Nazar AI</th>
            <th className="border px-1 py-1 text-xs">Zoom IQ</th>
            <th className="border px-1 py-1 text-xs">Affectiva</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-1 py-1 text-xs">
              Tracking students&apos; emotions
            </td>
            <td className="border px-1 py-1 text-xs">
              ✓ Uses Face Emotion Recognition (FER)
            </td>
            <td className="border px-1 py-1 text-xs">
              ❌
            </td>
            <td className="border px-1 py-1 text-xs">
              ✓ Provides Emotion SDK for analysis
            </td>
          </tr>
          <tr>
            <td className="border px-1 py-1 text-xs">
              Tracking students&apos; head positions
            </td>
            <td className="border px-1 py-1 text-xs">
              ✓ Uses Head Pose Estimation (HPE)
            </td>
            <td className="border px-1 py-1 text-xs">
              ❌
            </td>
            <td className="border px-1 py-1 text-xs">
              ❌
            </td>
          </tr>
          <tr>
            <td className="border px-1 py-1 text-xs">
              Revealing learning characteristics
            </td>
            <td className="border px-1 py-1 text-xs">✓ Data analysis using ChatGPT4</td>
            <td className="border px-1 py-1 text-xs">
              ❌
            </td>
            <td className="border px-1 py-1 text-xs">
              ❌
            </td>
          </tr>
          <tr>
            <td className="border px-1 py-1 text-xs">Analyzing emotional indicators</td>
            <td className="border px-1 py-1 text-xs">
              ✓ Collects emotional data during lessons
            </td>
            <td className="border px-1 py-1 text-xs">
              ❌
            </td>
            <td className="border px-1 py-1 text-xs">
              ✓ Provides Emotion SDK for analysis
            </td>
          </tr>
          <tr>
            <td className="border px-1 py-1 text-xs">
              Identifying student distractions
            </td>
            <td className="border px-1 py-1 text-xs">
              ✓ Tracks when students are distracted
            </td>
            <td className="border px-1 py-1 text-xs">
            ✓ Tracks when students are distracted
              
            </td>
            <td className="border px-1 py-1 text-xs">
              ❌ 
            </td>
          </tr>
          <tr>
            <td className="border px-1 py-1 text-xs">Evaluating teaching methods</td>
            <td className="border px-1 py-1 text-xs">
              ✓ Uses GPT4 for method effectiveness
            </td>
            <td className="border px-1 py-1 text-xs">
              ❌
            </td>
            <td className="border px-1 py-1 text-xs">
              ❌
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
