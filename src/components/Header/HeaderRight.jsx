import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeaderRight = (props) => {
  const { user, profile, active, setActive, logOut, id } = props;

  console.log("first 123", user);

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
                to={`/profile/?id=${id}`}
                className="subnav-user__tag"
              >
                <div className="subnav-user__tag__left">
                  <i class="bx bxs-user-account"></i>
                </div>
                <div className="subnav-user__tag__center">Profile</div>
                <div className="subnav-user__tag__right">
                  <i class="bx bx-chevron-right"></i>
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
              {/* {(profile.role === "Admin" || profile.role === "Author") && (
                <Link
                  to={`/postnew/?id=${id}`}
                  className="subnav-user__tag"
                >
                  <div className="subnav-user__tag__left">
                    <i class="bx bx-detail"></i>
                  </div>
                  <div className="subnav-user__tag__center">Post up</div>
                  <div className="subnav-user__tag__right">
                    <i class="bx bx-chevron-right"></i>
                  </div>
                </Link>
              )} */}
              {profile.role === "Admin" && (
                <Link to={"/admin"} className="subnav-user__tag">
                  <div className="subnav-user__tag__left">
                    <i class="bx bx-shield-quarter"></i>
                  </div>
                  <div className="subnav-user__tag__center">
                    Admin Dashboard
                  </div>
                  <div className="subnav-user__tag__right">
                    <i class="bx bx-chevron-right"></i>
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
                  <i class="bx bx-log-out"></i>
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
