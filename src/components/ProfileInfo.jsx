/* eslint-disable react/prop-types */
import { getInitials } from "../utils/helper";

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100 shadow">
        {getInitials(userInfo?.fullName)}
      </div>

      <div>
        <p className="text-sm font-medium">{userInfo?.fullName}</p>
        <button onClick={onLogout} className="text-sm text-slate-700 underline">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
