"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";
import { CircleUserRound, LogOut } from "lucide-react";
import { SignInButton } from "@/features/auth";
import { Skeleton } from "@/shared/ui/skeleton";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSignOut } from "@/features/auth/use-sign-out";

export default function Profile() {
  const session = useSession();
  const { signOut, isPending: isLoadingSignOut } = useSignOut();
  console.log("session", session);
  if (session.status === "loading") {
    return <Skeleton className="w-8 h-8 rounded-full" />;
  }

  if (session.status === "unauthenticated") {
    return <SignInButton />;
  }
  const user = session?.data?.user;
  console.log("user", user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="p-px rounded-full self-center h-8 w-8"
        >
          {/* TODO: Добавить ссылку на фотку*/}
          <CircleUserRound className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-2 ">
        <DropdownMenuLabel>
          <p>Мой аккаунт</p>
          {/* TODO: Добавить ссылку */}
        </DropdownMenuLabel>
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={`/profile/${(user as any)?.id}`}>
              {/* TODO: Добавить профиль */}
              <span>Профиль</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={isLoadingSignOut}
            onClick={() => signOut()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Выход</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
