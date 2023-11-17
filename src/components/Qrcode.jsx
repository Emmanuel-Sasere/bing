import React from 'react';
import QRCode from 'react-qr-code';

const LinkedInQRCode = () => {
  const linkedInProfileURL = 'https://www.linkedin.com/in/emmanuelsasere/';

  return (
    <div>
      <QRCode value={linkedInProfileURL} size={70} />
    </div>
  );
};

export default LinkedInQRCode;
