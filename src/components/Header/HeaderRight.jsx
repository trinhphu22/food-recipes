import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GiBlackBook, GiCompass } from "react-icons/gi";
import { HiChevronRight, HiOutlineLogout } from "react-icons/hi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const HeaderRight = (props) => {
  const { user, profile, active, setActive, logOut, id } = props;

  return (
    <>
      {!user ? (
        <Link to="/login" className="icon">
          <AiOutlineUser />
        </Link>
      ) : (
        <div className="header__nav-right__item">
          <div className="box-user">
            <div onClick={() => setActive(!active)} className="box-user__info">
              <div className="box-user__info__displayname">{profile.name}</div>
              <div className="box-user__info__image">
                <img src={profile.avatar} alt="" />
              </div>
            </div>
          </div>
          {active && (
            <div className="subnav-user">
              <div className="subnav-user__image">
                <div className="subnav-user__image__box">
                  <img src={profile.avatar} alt="" />
                  <div className="info">
                    <div className="info__user">
                      {profile.name}
                      <span>({profile.role})</span>
                    </div>
                    <div className="info__email">{profile.email}</div>
                  </div>
                </div>
              </div>
              <Link
                onClick={() => setActive(false)}
                to={`/profile/?id=${id}`}
                className="subnav-user__tag"
              >
                <div className="subnav-user__tag__left">
                  <RiUserSettingsLine />
                </div>
                <div className="subnav-user__tag__center">Profile</div>
                <div className="subnav-user__tag__right">
                  <HiChevronRight />
                </div>
              </Link>
              <Link
                onClick={() => setActive(false)}
                to={`/order-management/?id=${id}`}
                className="subnav-user__tag"
              >
                <div className="subnav-user__tag__left">
                  <GiCompass />
                </div>
                <div className="subnav-user__tag__center">Order Management</div>
                <div className="subnav-user__tag__right">
                  <HiChevronRight />
                </div>
              </Link>
              {/* <Link
                to={`/message/?id=${id}`}
                className="subnav-user__tag"
              >
                <div className="subnav-user__tag__left">
                  <i class="bx bx-bell"></i>
                </div>
                <div className="subnav-user__tag__center">Message</div>
                {alert.length > 0 && (
                  <div class="subnav-user__tag__alert">{alert.length}</div>
                )}
                <div className="subnav-user__tag__right">
                  <i class="bx bx-chevron-right"></i>
                </div>
              </Link> */}
              {(profile.role === "Admin" || profile.role === "Author") && (
                <Link
                  onClick={() => setActive(false)}
                  to={`/recipe-management/?id=${id}`}
                  className="subnav-user__tag"
                >
                  <div className="subnav-user__tag__left">
                    <GiBlackBook />
                  </div>
                  <div className="subnav-user__tag__center">
                    Recipe Management
                  </div>
                  <div className="subnav-user__tag__right">
                    <HiChevronRight />
                  </div>
                </Link>
              )}
              {profile.role === "Admin" && (
                <Link to={"/admin"} className="subnav-user__tag">
                  <div className="subnav-user__tag__left">
                    <MdOutlineAdminPanelSettings />
                  </div>
                  <div className="subnav-user__tag__center">
                    Admin Dashboard
                  </div>
                  <div className="subnav-user__tag__right">
                    <HiChevronRight />
                  </div>
                </Link>
              )}

              <Link
                to={"/"}
                onClick={() => {
                  logOut();
                  setActive(false);
                }}
                className="subnav-user__tag"
              >
                <div className="subnav-user__tag__left">
                  <HiOutlineLogout />
                </div>
                <div className="subnav-user__tag__center">Logout</div>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default HeaderRight;
