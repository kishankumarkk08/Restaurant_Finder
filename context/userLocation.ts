"use client"

import { createContext, Dispatch, SetStateAction } from "react";

interface UserLocationContextType {
  userCurrLocation: { lat: number | null; lng: number | null };
  setUserCurrLocation: Dispatch<SetStateAction<{ lat: number | null; lng: number | null }>>;
}

export const UserLocationContext = createContext<UserLocationContextType | undefined>(undefined);