import React, { useState } from "react";
import "./Time_Table.css";

interface ScheduleEntry {
  id: string;
  subject: string;
  startTime: string;
  endTime: string;
}

interface DaySchedule {
  day: string;
  entries: ScheduleEntry[];
}

const initialWeeklySchedule: DaySchedule[] = [
  { day: "Monday", entries: [
      { id: "mon-1", subject: "Math", startTime: "09:00", endTime: "10:00" },
      { id: "mon-2", subject: "Physics", startTime: "10:30", endTime: "11:30" },
  ]},
  { day: "Tuesday", entries: [
      { id: "tue-1", subject: "Chemistry", startTime: "09:00", endTime: "10:00" },
      { id: "tue-2", subject: "English", startTime: "10:30", endTime: "11:30" },
  ]},
  { day: "Wednesday", entries: [
      { id: "wed-1", subject: "Computer Science", startTime: "09:00", endTime: "10:00" },
      { id: "wed-2", subject: "History", startTime: "10:30", endTime: "11:30" },
  ]},
  { day: "Thursday", entries: [
      { id: "thu-1", subject: "Biology", startTime: "09:00", endTime: "10:00" },
      { id: "thu-2", subject: "Geography", startTime: "10:30", endTime: "11:30" },
  ]},
  { day: "Friday", entries: [
      { id: "fri-1", subject: "Economics", startTime: "09:00", endTime: "10:00" },
      { id: "fri-2", subject: "Physical Education", startTime: "10:30", endTime: "11:30" },
  ]},
];

const subjectOptions = [
  "Math", "Physics", "Chemistry", "Biology", "English",
  "History", "Geography", "Computer Science",
  "Economics", "Physical Education"
];

function Time_Table() {
  const [weeklySchedule, setWeeklySchedule] = useState<DaySchedule[]>(initialWeeklySchedule);
  const [tempValues, setTempValues] = useState<Record<string, { subject: string; startTime: string; endTime: string }>>({});

  // Function to handle the temporary values for changes in startTime and subject
  const handleTempChange = (entryId: string, field: "subject" | "startTime", value: string) => {
    setTempValues((prev) => {
      const prevEntry = prev[entryId] || { subject: "", startTime: "", endTime: "" };
      let startTime = prevEntry.startTime;
      let endTime = prevEntry.endTime;

      if (field === "subject") {
        return {
          ...prev,
          [entryId]: {
            ...prevEntry,
            subject: value,
          },
        };
      }

      if (field === "startTime") {
        startTime = value;
        const [hour, minute] = value.split(":").map(Number);
        const endHour = (hour + 1) % 24;
        endTime = `${String(endHour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
      }

      return {
        ...prev,
        [entryId]: {
          subject: prevEntry.subject,
          startTime,
          endTime,
        },
      };
    });
  };

  // Function to save the changes made to the timetable
  const handleSave = (dayIndex: number, entryId: string) => {
    const temp = tempValues[entryId];
    if (!temp || !temp.subject) {
      alert("Please select a subject before saving.");
      return;
    }

    setWeeklySchedule((prev) =>
      prev.map((day, i) =>
        i === dayIndex
          ? {
              ...day,
              entries: day.entries.map((entry) =>
                entry.id === entryId
                  ? {
                      ...entry,
                      subject: temp.subject,
                      startTime: temp.startTime,
                      endTime: temp.endTime,
                    }
                  : entry
              ),
            }
          : day
      )
    );
  };

  // Function to add a new row for a subject
  const handleAddRow = (dayIndex: number) => {
    const newEntry: ScheduleEntry = {
      id: `${weeklySchedule[dayIndex].day}-${Date.now()}`,
      subject: "",
      startTime: "",
      endTime: "",
    };
    setWeeklySchedule((prev) =>
      prev.map((day, i) =>
        i === dayIndex ? { ...day, entries: [...day.entries, newEntry] } : day
      )
    );
  };

  // Function to delete a row
  const handleDeleteRow = (dayIndex: number, entryId: string) => {
    setWeeklySchedule((prev) =>
      prev.map((day, i) =>
        i === dayIndex
          ? {
              ...day,
              entries: day.entries.filter((entry) => entry.id !== entryId),
            }
          : day
      )
    );

    setTempValues((prev) => {
      const newState = { ...prev };
      delete newState[entryId];
      return newState;
    });
  };

  const handleSubmit = (dayIndex: number) => {
    console.log("Submitting schedule for:", weeklySchedule[dayIndex]);
    alert(`Schedule for ${weeklySchedule[dayIndex].day} saved successfully!`);
  };

  return (
    <div className="page-container">
      <div className="page-main-container">
        <div className="page-base-container">
          <h1 className="timetable-heading">Time Table</h1>
        </div>
      </div>

      {weeklySchedule.map((day, dayIndex) => (
        <div key={day.day} className="onkar-pagecontainer">
          <div className="page-base-container">
            <h2>Time table - {day.day}</h2>
            <table className="timetable-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {day.entries.map((entry) => {
                  const temp = tempValues[entry.id] || entry;

                  return (
                    <tr key={entry.id}>
                      <td>
                        <select
                          value={temp.subject}
                          onChange={(e) =>
                            handleTempChange(entry.id, "subject", e.target.value)
                          }
                          className="time-table-input"
                        >
                          <option value="">Select Subject</option>
                          {subjectOptions.map((subject) => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <input
                          type="time"
                          value={temp.startTime}
                          onChange={(e) =>
                            handleTempChange(entry.id, "startTime", e.target.value)
                          }
                          className="time-table-input"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          value={temp.endTime}
                          readOnly
                          className="time-table-input"
                        />
                      </td>
                      <td>
                        <button
                          className="save-btn"
                          onClick={() => handleSave(dayIndex, entry.id)}
                        >
                          Save
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteRow(dayIndex, entry.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={4}>
                    <div className="button-container">
                      <button
                        className="add-class-btn"
                        onClick={() => handleAddRow(dayIndex)}
                      >
                        Add Class
                      </button>
                      <button
                        className="submit-btn"
                        onClick={() => handleSubmit(dayIndex)}
                      >
                        Save Schedule
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Time_Table;