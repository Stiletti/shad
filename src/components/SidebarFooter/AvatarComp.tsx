import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type UsernameProps = {
    username: string,
    size: string
}

export function AvatarComp({username, size}: UsernameProps) {
    const url = `https://fallback.pics/api/v1/avatar/${size}?text=${username}`;

    return (
        <Avatar>
          <AvatarImage src={url} />
          <AvatarFallback>{username}</AvatarFallback>
        </Avatar>
    )
}