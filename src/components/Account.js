import React from "react";
import accountStyle from "../styles/Account.module.css";

function Account() {
  return (
    <div className={accountStyle.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
      {/* <span className={navStyle.material-icons-outlined} title="Logout">
          logout
        </span> */}
    </div>
  );
}

export default Account;
