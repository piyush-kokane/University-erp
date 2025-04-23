import React from 'react';
import './Circulars.css'


const Circulars = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="page-container">
        <div className="page-main-container">
          <div className="page-base-container">
            <h2 className="text-xl font-bold mb-4">Admin Circular Announcement</h2>
            <form className="space-y-4 circular-form">

              
              <div className="flex items-center gap-4">
                <label className="w-40 font-medium">Title</label>
                <input
                  type="text"
                  className="flex-1 border p-2 rounded"
                  required
                />
              </div>

              
              <div className="flex gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <label className="w-20 font-medium">Date</label>
                  <input
                    type="date"
                    className="flex-1 border p-2 rounded"
                    required
                  />
                </div>
                <div className="flex items-center gap-4 flex-1">
                  <label className="w-20 font-medium">Time</label>
                  <input
                    type="time"
                    className="flex-1 border p-2 rounded"
                    required
                  />
                </div>
              </div>

             
              <div className="flex items-center gap-4">
                <label className="w-40 font-medium">Small Description</label>
                <input
                  type="text"
                  className="flex-1 border p-2 rounded"
                  required
                />
              </div>

              
              <div className="flex items-start gap-4">
                <label className="w-40 font-medium pt-2">Big Description</label>
                <textarea
                  className="flex-1 border p-2 rounded"
                  rows={5}
                  required
                />
              </div>

              
              <div className="flex items-center gap-4">
                <label className="w-40 font-medium">From (Admin/Dept)</label>
                <input
                  type="text"
                  className="flex-1 border p-2 rounded"
                  required
                />
              </div>

              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Submit Circular
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circulars;