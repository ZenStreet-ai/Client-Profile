"use client";
import ProfileComponentLaptop from "@/components/ProfileComponentLaptop";
import ProfileComponentMobile from "@/components/ProfileComponentMobile";
import useMediaQuery from "@/hooks/useMediaQuery";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	const isLaptop = useMediaQuery('(min-width: 768px)');
	// const router = useRouter();
	// const pathname = usePathname();
	// useEffect(() => {
	// 	if (pathname === "/") {
	// 		router.replace("/profile");
	// 	}
	// }, [router, pathname]);
	return <div>
		{isLaptop ? <ProfileComponentLaptop /> : <ProfileComponentMobile />}
	</div>;
}
