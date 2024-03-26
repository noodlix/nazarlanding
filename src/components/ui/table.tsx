import React from "react";

export const Table = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <table className="table-auto border-collapse w-3/5">
        <thead>
          <tr>
            <th className="border px-1 py-1">Advantage</th>
            <th className="border px-1 py-1">Nazar AI</th>
            <th className="border px-1 py-1">Zoom IQ</th>
            <th className="border px-1 py-1">Affectiva</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-1 py-1">
              Tracking students&apos; emotions
            </td>
            <td className="border px-1 py-1">
              ✓ Uses Face Emotion Recognition (FER)
            </td>
            <td className="border px-1 py-1">
              ❌
            </td>
            <td className="border px-1 py-1">
              ✓ Provides Emotion SDK for analysis
            </td>
          </tr>
          <tr>
            <td className="border px-1 py-1">
              Tracking students&apos; head positions
            </td>
            <td className="border px-1 py-1">
              ✓ Uses Head Pose Estimation (HPE)
            </td>
            <td className="border px-1 py-1">
              ❌
            </td>
            <td className="border px-1 py-1">
              ❌
            </td>
          </tr>
          <tr>
            <td className="border px-1 py-1">
              Revealing learning characteristics
            </td>
            <td className="border px-1 py-1">✓ Data analysis using ChatGPT4</td>
            <td className="border px-1 py-1">
              ❌
            </td>
            <td className="border px-1 py-1">
              ❌
            </td>
          </tr>
          <tr>
            <td className="border px-1 py-1">Analyzing emotional indicators</td>
            <td className="border px-1 py-1">
              ✓ Collects emotional data during lessons
            </td>
            <td className="border px-1 py-1">
              ❌
            </td>
            <td className="border px-1 py-1">
              ✓ Provides Emotion SDK for analysis
            </td>
          </tr>
          <tr>
            <td className="border px-1 py-1">
              Identifying student distractions
            </td>
            <td className="border px-1 py-1">
              ✓ Tracks when students are distracted
            </td>
            <td className="border px-1 py-1">
            ✓ Tracks when students are distracted
              
            </td>
            <td className="border px-1 py-1">
              ❌ 
            </td>
          </tr>
          <tr>
            <td className="border px-1 py-1">Evaluating teaching methods</td>
            <td className="border px-1 py-1">
              ✓ Uses GPT4 for method effectiveness
            </td>
            <td className="border px-1 py-1">
              ❌
            </td>
            <td className="border px-1 py-1">
              ❌
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
