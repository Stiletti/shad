import { ChevronsUpDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useSidebar } from "../ui/sidebar";

type UsernameProps = {
  username: string;
  size: string;
};

function shortenUsername(username: string) {
  if (username.length > 3) {
    return username
    .split(' ')
    .map(word => word[0]?.toUpperCase() || '')
    .join('');
  } else {
    return username.toUpperCase();
  }
}

export function AvatarComp({ username, size }: UsernameProps) {
  const { open } = useSidebar();
  const url = `https://fallback.pics/api/v1/avatar/${size}?text=${shortenUsername(username)}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {open ? (
          <div className="flex justify-between items-center transition-all duration-300 bg-white/10 p-2 rounded-md hover:bg-white/20">
            <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={url} />
              <AvatarFallback>{username}</AvatarFallback>
            </Avatar>
            {username}
            </div>
            <ChevronsUpDown />
          </div>
        ) : (
          <div className="transition-all duration-300">
            <Avatar>
              <AvatarImage src={url} />
              <AvatarFallback>{username}</AvatarFallback>
            </Avatar>
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
