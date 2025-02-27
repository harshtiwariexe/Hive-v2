"use client";
import { UserButton } from "@/features/auth/components/userButton";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/useCreateWorkspaceModal";
import { useGetWorkspaces } from "@/features/workspaces/api/useGetWorkspace";
import { useEffect, useMemo } from "react";

export default function Home() {
  const [open, setOpen] = useCreateWorkspaceModal();
  const { data, isLoading } = useGetWorkspaces();
  const workspaceID = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceID) {
      console.log("Redirecting to workspace");
    } else if (!open) {
      setOpen(true);
    }
  }, [data, isLoading, workspaceID, open, setOpen]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
