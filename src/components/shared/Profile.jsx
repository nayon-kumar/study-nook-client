"use client";
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import MyContainer from "./MyContainer";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Profile = ({ user }) => {
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };
  return (
    <MyContainer>
      <Dropdown>
        <Dropdown.Trigger className="rounded-full">
          <Avatar>
            <Avatar.Image
              referrerPolicy="no-referrer"
              alt={user.name}
              src={user.image}
            />
            <Avatar.Fallback delayMs={600}>
              {user.name.charAt(0)}
            </Avatar.Fallback>
          </Avatar>
        </Dropdown.Trigger>
        <Dropdown.Popover placement="left" className="rounded-md mt-21 -mr-15">
          <div className="px-3 pt-3 pb-1">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-0">
                <p className="text-sm leading-5 font-medium">{user.name}</p>
                <p className="text-xs leading-none text-muted">{user.email}</p>
              </div>
            </div>
          </div>
          <Dropdown.Menu>
            <Dropdown.Item
              onAction={() => router.push("/my-listings")}
              id="dashboard"
              textValue="Dashboard"
            >
              <Label>My Listings</Label>
            </Dropdown.Item>
            <Dropdown.Item
              onAction={() => router.push("/my-bookings")}
              id="profile"
              textValue="Profile"
            >
              <Label>My Bookings</Label>
            </Dropdown.Item>

            <Dropdown.Item
              id="logout"
              textValue="Logout"
              variant="danger"
              onClick={handleLogout}
            >
              <div className="flex w-full items-center justify-between gap-2">
                <Label>Log Out</Label>
                <ArrowRightFromSquare className="size-3.5 text-danger" />
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </MyContainer>
  );
};

export default Profile;
