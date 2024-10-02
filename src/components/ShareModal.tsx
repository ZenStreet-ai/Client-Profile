'use client'

import { Envelope, Facebook, Twitter, Whatsapp } from "@/assets/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomButton from "./CustomButton";
import { useToast } from "@/hooks/use-toast";
const ShareModal = ({
  triggerComponent,
}: {
  triggerComponent: React.ReactNode;
}) => {
  const link = "http://www.therapist-swetha.com/profile/view";
  const { toast } = useToast();
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerComponent}</DialogTrigger>
      <DialogContent className="px-4 py-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col justify-center gap-1 mt-8 max-w-full">
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
                  <span className="text-sm text-gray-700 mt-2">Mail</span>
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
                    value={link}
                    readOnly
                    className="mt-2 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                  <div className="mt-2 justify-center">
                    <CustomButton
                      variant="outline"
                      size="lg"
                      className="outline outline-2 outline-blue-500 text-blue-500"
                      onClick={() => {
                        //navigator.clipboard.writeText(link);
                        toast({
                          description: "Copied the link",
                        });
                      }}
                    >
                      Copy Link
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
