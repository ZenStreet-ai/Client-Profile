import { Envelope, Facebook, Twitter, Whatsapp } from "@/assets/icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomButton from "./CustomButton";
const ShareModal = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button
					className="bg-blue-500 text-white px-4 py-2 rounded"
					type="button"
				>
					Share
				</button>
			</DialogTrigger>
			<DialogContent className="px-4 py-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg">
				<DialogHeader>
					<DialogTitle>Share</DialogTitle>
				</DialogHeader>
				{/* Icon Container */}
				<div className="flex justify-center gap-4 sm:gap-8 lg:gap-16 mx-auto items-center m-4">
					<div className="flex flex-col items-center">
						<Facebook />
						<span className="text-sm text-gray-700 mt-2">Facebook</span>
					</div>
					<div className="flex flex-col items-center">
						<Whatsapp />
						<span className="text-sm text-gray-700 mt-2">Whatsapp</span>
					</div>
					<div className="flex flex-col items-center">
						<Twitter />
						<span className="text-sm text-gray-700 mt-2">Twitter</span>
					</div>
					<div className="flex flex-col items-center">
						<Envelope />
						<span className="text-sm text-gray-700 mt-2">Envelope</span>
					</div>
				</div>
				<div className="mt-6">
					<label
						htmlFor="Page Link"
						className="block text-sm font-medium text-gray-700"
					>
						Page Link
					</label>
					<div className="flex items-center gap-x-2">
						<input
							type="text"
							value="http://www.therapist-swetha.com/profile/view"
							readOnly
							className="mt-2 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
						/>
						<div className="mt-2 justify-center">
							<CustomButton
								variant="outline"
								size="lg"
								className="outline outline-2 outline-blue-500 text-blue-500"
							>
								Copy Link
							</CustomButton>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ShareModal;
