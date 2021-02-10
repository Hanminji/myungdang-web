
function Footer() {
  const sendMail = () => {
    window.location.href = 'mailto:myungdang.cs@gmail.com?Subject=명당 문의하기'
  }
  return (
    <div className="footer">
      더 나은 서비스를 제공할 수 있도록<br />개선점을 알려주세요!<br />
      <span style={{ textDecoration: 'underline', display: 'contents' }} onClick={sendMail}>myungdang.cs@gmail.com</span>
    </div>
  );
}

export default Footer;