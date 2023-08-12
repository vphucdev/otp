import { useState } from "react";
import InputOTP from "./InputOTP";
import classNames from "classnames/bind";

import styles from "./GenerateOTP.module.scss"


const cx = classNames.bind(styles);

function GenerateOTP() {
  const [OTP, setOTP] = useState("");

  const handleGenOTP = () => {
    setOTP(Math.floor(Math.random() * 900000) + 100000);
  };
  return (
    <div className={cx('genotp-wrapper')}>
      <button onClick={handleGenOTP}> Generate OTP</button>
      <div>Your OTP: {OTP}</div>
      <InputOTP />
    </div>
  );
}

export default GenerateOTP;
