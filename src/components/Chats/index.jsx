import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const ChatApp = () => {
  return (
    <div className="grid min-h-screen w-full m-auto container">
      <div className="flex flex-col">
        <div className="border-b p-4 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border">
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">Acme Inc</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoveHorizontalIcon className="h-5 w-5" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View profile</DropdownMenuItem>
                <DropdownMenuItem>Mute notifications</DropdownMenuItem>
                <DropdownMenuItem>Delete conversation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <ScrollArea className="flex-1 p-4">
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8 border">
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800">
                <p>Hey, hows it going?</p>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  2:39 PM
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="rounded-lg bg-blue-500 p-3 text-sm text-white">
                <p>I'm doing great, thanks for asking!</p>
                <div className="mt-2 text-xs text-gray-200">3:01 PM</div>
              </div>
              <Avatar className="h-8 w-8 border">
                <AvatarFallback>YO</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8 border">
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800">
                <p>Did you see the new design?</p>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  3:15 PM
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="rounded-lg bg-blue-500 p-3 text-sm text-white">
                <p>Yes, I really like it! Great work.</p>
                <div className="mt-2 text-xs text-gray-200">3:20 PM</div>
              </div>
              <Avatar className="h-8 w-8 border">
                <AvatarFallback>YO</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </ScrollArea>
        <div className="border-t p-4 dark:border-gray-700">
          <div className="relative">
            <Textarea
              placeholder="Type your message..."
              className="min-h-[48px] w-full resize-none rounded-2xl border border-gray-200 bg-gray-100 p-3 pr-16 text-sm shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-3 top-3"
            >
              <SendIcon className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export default ChatApp;
