import { NotFound404 } from "@/assets/icons";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <NotFound404 />
      <h1 className="text-center text-[#1F86D0] text-4xl font-medium leading-[141.4%] tracking[-0.44px]">
        Oops! Page Not Found
      </h1>
      <p className="text-center text-[#7F7F7F] text-base font-medium leading-[141.4%] tracking[-0.2px]">
        It seems we can&apos;t find the page you&apos;re looking for.
      </p>
    </div>
  );
}

export default NotFound;
