import { useState } from "react";
import OtpInput from "react-otp-input";
import classNames from "classnames/bind";

import styles from "./GenerateOTP.module.scss"

const cx = classNames.bind(styles);

function InputOTP() {
  const [otp, setOtp] = useState("");
  return (
    <div className={cx('wrapper')}>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
}

export default InputOTP;
