import React from "react";
import { Avatar } from "flowbite-react";
import headerIcon from "../../assets/icons/star.svg";
function Header() {
  return (
    <div>
      <div className="profile__section">
        <span className="user__name">Admin</span>
        <Avatar
          img={headerIcon}
          rounded={true}
          status="online"
          statusPosition="bottom-right"
        />
      </div>
    </div>
  );
}

export default Header;
