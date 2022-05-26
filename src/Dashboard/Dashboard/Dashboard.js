//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link } from "react-router-dom";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div id="header">
              {/* collapsed props to change menu size using menucollapse state */}
              <ProSidebar collapsed={menuCollapse}>
                <SidebarContent>
                  <Link to="/dashboard">
                    <Menu iconShape="square">
                      <MenuItem active={true} icon={<FiHome />}>
                        Profile
                      </MenuItem>
                    </Menu>
                  </Link>
                  <Link to="/dashboard/myorder">
                    <Menu iconShape="square">
                      <MenuItem icon={<FaList />}>My Order</MenuItem>
                    </Menu>
                  </Link>
                  <Link to="/dashboard/wishlist">
                    <Menu iconShape="square">
                      <MenuItem icon={<FaRegHeart />}>WishList</MenuItem>
                    </Menu>
                  </Link>
                  <Link to="/dashboard/review">
                    <Menu iconShape="square">
                      <MenuItem icon={<RiPencilLine />}>
                        Review And Shop
                      </MenuItem>
                    </Menu>
                  </Link>
                  <Link to="/dashboard/seller">
                    <Menu iconShape="square">
                      <MenuItem icon={<BiCog />}>Sell On And Shop</MenuItem>
                    </Menu>
                  </Link>
                </SidebarContent>
                <SidebarFooter>
                  <Menu iconShape="square">
                    <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                  </Menu>
                </SidebarFooter>
              </ProSidebar>
            </div>
          </div>
          <div className="col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
