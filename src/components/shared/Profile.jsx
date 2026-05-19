import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import MyContainer from "./MyContainer";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const Profile = ({ user }) => {
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
          <div className="px-3 py-3 border-b">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-0">
                <p className="text-sm leading-5 font-medium">{user.name}</p>
                <p className="text-xs leading-none text-muted">{user.email}</p>
              </div>
            </div>
          </div>
          <div className="border-b mt-1 pb-1">
            <Link
              className="block hover:bg-[#E48B25] hover:text-white px-2 mx-1 rounded-md py-1"
              href="/my-listings"
            >
              My Listings
            </Link>
            <Link
              className="block hover:bg-[#E48B25] hover:text-white px-2 mx-1 rounded-md py-1"
              href="/my-bookings"
            >
              My Bookings
            </Link>
          </div>
          <Dropdown.Menu>
            <Dropdown.Item
              id="logout"
              textValue="Logout"
              variant="danger"
              onClick={async () => await authClient.signOut()}
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
