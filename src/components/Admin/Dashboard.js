/**
 * @file Dashboard.js
 * @description Displays the dashboard summary of guest data, including total guests and attending status, for both his side (Louis in this case) and
 *              her side (Anais in this case).
 * @note Admin Panel is doen in English only.
 * @author Louis 
 * @date 19 October 2024
 */

"use client";

import React from "react";

const Dashboard = ({ guests }) => {
  // Calculations for each section
  const totalGuests = guests?.length;
  const LouisSideGuests = guests?.filter(
    (guest) => guest?.guestSide === "Louis"
  );
  const AnaisSideGuests = guests.filter(
    (guest) => guest.guestSide === "Anais"
  );

  // Status totals for all guests
  const attendingYes = guests.filter(
    (guest) => guest.attending === "Yes"
  ).length;
  const attendingNo = guests.filter((guest) => guest.attending === "No").length;
  const attendingUnknown = guests.filter(
    (guest) => guest.attending === "Unknown"
  ).length;

  // Status totals for Louis's side
  const LouisAttendingYes = LouisSideGuests.filter(
    (guest) => guest.attending === "Yes"
  ).length;
  const LouisAttendingNo = LouisSideGuests.filter(
    (guest) => guest.attending === "No"
  ).length;
  const LouisAttendingUnknown = LouisSideGuests.filter(
    (guest) => guest.attending === "Unknown"
  ).length;

  // Status totals for Anais's side
  const AnaisAttendingYes = AnaisSideGuests.filter(
    (guest) => guest.attending === "Yes"
  ).length;
  const AnaisAttendingNo = AnaisSideGuests.filter(
    (guest) => guest.attending === "No"
  ).length;
  const AnaisAttendingUnknown = AnaisSideGuests.filter(
    (guest) => guest.attending === "Unknown"
  ).length;

  return (
    <div className="w-full flex flex-col jusify-start items-start ">
      <h4 className="font-sans text-neutral-600 font-bold mb-4 text-left">
        Dashboard
      </h4>

      {guests.length === 0 ? (
        <p className="font-sans">Counting...</p>
      ) : (
        <>
          {/* Section 1: Total number of guests */}
          <div className="mb-6 flex flex-col items-start border-b">
            <h6 className="font-sans font-bold text-left">
              Total Guests Invited
            </h6>
            <p className="font-sans text-left">
              Total guests: <span className="font-bold">{totalGuests}</span>
            </p>
            <p className="font-sans text-left">
              Louis&apos;s side:{" "}
              <span className="font-bold">{LouisSideGuests.length}</span>
            </p>
            <p className="font-sans text-left">
              Anais&apos;s side:{" "}
              <span className="font-bold">{AnaisSideGuests.length}</span>
            </p>
          </div>

          {/* Section 2: Total guests by attending status */}
          <div className="mb-6 flex flex-col items-start border-b">
            <h6 className="font-sans font-bold text-left">
              Guests Attending Status {"("}All{")"}
            </h6>
            <p className="font-sans text-left">
              Coming: <span className="font-bold">{attendingYes}</span>
            </p>
            <p className="font-sans text-left">
              Not coming: <span className="font-bold">{attendingNo}</span>
            </p>
            <p className="font-sans text-left">
              Unsure: <span className="font-bold">{attendingUnknown}</span>
            </p>
          </div>

          {/* Section 3: Guests attending status from his side */}
          <div className="mb-6 flex flex-col items-start border-b">
            <h6 className="font-sans font-bold text-left">
              Guests Attending Status {"("}Louis&apos;s Side{")"}
            </h6>
            <p className="font-sans text-left">
              Coming: <span className="font-bold">{LouisAttendingYes}</span>
            </p>
            <p className="font-sans text-left">
              Not coming:{" "}
              <span className="font-bold">{LouisAttendingNo}</span>
            </p>
            <p className="font-sans text-left">
              Unsure:{" "}
              <span className="font-bold">{LouisAttendingUnknown}</span>
            </p>
          </div>

          {/* Section 4: Guests attending status from her side */}
          <div className="mb-6 flex flex-col items-start ">
            <h6 className="font-sans font-bold text-left">
              Guests Attending Status {"("}Anais&apos;s Side{")"}
            </h6>
            <p className="font-sans text-left">
              Coming: <span className="font-bold">{AnaisAttendingYes}</span>
            </p>
            <p className="font-sans text-left">
              Not coming:{" "}
              <span className="font-bold">{AnaisAttendingNo}</span>
            </p>
            <p className="font-sans text-left">
              Unsure:{" "}
              <span className="font-bold">{AnaisAttendingUnknown}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
