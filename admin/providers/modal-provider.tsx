"use client"; // Indicates that this is a Client Component

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

// ModalProvider component that serves as a provider for modal/dialog functionality
export const ModalProvider = () => {
	// Use the useState hook to manage the isMounted state
	const [isMounted, setIsMounted] = useState(false);

	// Use the useEffect hook to set the isMounted state to true when the component mounts
	useEffect(() => {
		setIsMounted(true);
	}, []);

	// If the component is not mounted, return null to prevent rendering
	if (!isMounted) {
		return null;
	}

	return (
		<>
			<StoreModal />
		</>
	);
};
