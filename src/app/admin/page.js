/**
 * @file page.js
 * @description Admin panel for managing wedding guest list, and dashboard. It includes Google authentication and access control for authorizing the access only to the admin gmail account.
 * @author Emanuele Sgroi
 * @date 19 October 2024
 */

"use client";

import React, { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Loading from "@/components/Loading/Loading";
import { Dashboard, GuestManagement } from "@/components/Admin/adminIndex";
import { MdDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export default function Admin() {
  const [user, setUser] = useState(null); // If null, the Admin is logged out
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const allowedEmail = process.env.NEXT_PUBLIC_ALLOWED_ADMIN_EMAIL; // The Admin Email
  const [activeTab, setActiveTab] = useState("dashboard"); // starting tab is "Dashboard"
  const [guests, setGuests] = useState([]); // Guests list

  // Google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user.email === allowedEmail) {
        setUser(result.user);
        setErrorMessage(null);
      } else {
        setErrorMessage("Unauthorized access");
        handleLogout();
      }
    } catch (error) {
      console.error("Login failed", error);
      setErrorMessage("Login Failed");
    }
    setLoading(false);
  };

  // Logout
  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
    setLoading(false);
  };

  // Auth state listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.email === allowedEmail) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Logout on window/tab close
    const handleBeforeUnload = () => handleLogout();
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      unsubscribe();
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [allowedEmail]);

  // Fetch Guests
  useEffect(() => {
    const fetchGuests = async () => {
      setLoading(true);
      try {
        const guestsCollectionRef = collection(db, "guests");
        const querySnapshot = await getDocs(guestsCollectionRef);
        const guestsArray = querySnapshot.docs.map((doc) => doc.data());
        setGuests(guestsArray);
      } catch (error) {
        console.error("Error fetching guests:", error);
      }
      setLoading(false);
    };
    fetchGuests();
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard guests={guests} />;
      case "guest-management":
        return <GuestManagement guests={guests} setGuests={setGuests} />;
      default:
        return <Dashboard guests={guests} />;
    }
  };

  return (
    <div
      className={`relative font-sans min-h-screen flex flex-col items-center max-sm:pb-[80px] ${
        user ? "justify-start" : "justify-center"
      } bg-gray-100 py-4 sm:px-4`}
    >
      <h3 className="font-sans mb-6 px-1 text-black">Admin Panel</h3>

      {errorMessage && (
        <p className="font-sans text-red-500 mb-4 px-1">{errorMessage}</p>
      )}

      {user ? (
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex justify-center gap-4 border-b border-neutral-300 pb-4 max-sm:px-2">
            <button
              onClick={() => router.push("/")}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
            >
              Go Back to Home
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Log out
            </button>
          </div>

          {/* Desktop Tabs */}
          <div className="max-sm:hidden w-full flex flex-wrap justify-center bg-neutral-300 py-2 gap-4">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full sm:w-auto py-2 px-4 text-sm sm:text-base rounded font-semibold 
              ${
                activeTab === "dashboard"
                  ? "bg-green-900 text-white"
                  : "bg-transparent border border-green-900 text-black"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("guest-management")}
              className={`w-full sm:w-auto py-2 px-4 text-sm sm:text-base rounded font-semibold 
              ${
                activeTab === "guest-management"
                  ? "bg-green-900 text-white"
                  : "bg-transparent border border-green-900 text-black"
              }`}
            >
              Guest Management
            </button>
          </div>

          {/* MOBILE Tabs */}
          <div className="sm:hidden fixed bottom-0 w-full flex bg-neutral-300 z-[999]">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`text-sm flex flex-1 justify-center items-center flex-col py-3 px-2
              ${
                activeTab === "dashboard"
                  ? "bg-green-900 text-white"
                  : "bg-transparent text-black"
              }`}
            >
              <MdDashboard
                size={30}
                className={`${activeTab === "dashboard" ? "text-white" : "text-black"}`}
              />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("guest-management")}
              className={`text-sm flex flex-1 justify-center items-center flex-col py-3 px-2
              ${
                activeTab === "guest-management"
                  ? "bg-green-900 text-white"
                  : "bg-transparent text-black"
              }`}
            >
              <IoIosPeople
                size={30}
                className={`${activeTab === "guest-management" ? "text-white" : "text-black"}`}
              />
              Guests
            </button>
          </div>

          {/* Render Tab Content */}
          <div className="w-full max-w-[1500px] bg-white p-4 md:p-6 shadow-lg mt-4">
            {renderTabContent()}
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <button
            onClick={handleGoogleLogin}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4 flex items-center gap-2 font-semibold"
          >
            <FcGoogle size={30} /> Login with Google
          </button>
          <button
            onClick={() => router.push("/")}
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mt-4"
          >
            Go Back to Home
          </button>
        </div>
      )}

      {loading && <Loading />}
    </div>
  );
}
