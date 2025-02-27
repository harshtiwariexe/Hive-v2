"use client";

import { CreateWorkspaceModal } from "@/features/workspaces/components/createWorkspaceModal";
import { useEffect, useState } from "react";

export const Modal = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  },[])

  if(!mounted) return null
  return (
    <>
      <CreateWorkspaceModal />
    </>
  );
};
