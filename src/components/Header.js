import '../assets/css/Header.css'

function Header() {
  const shareSNS = () => {
    window.navigator.share({
      title: '명당',
      url: 'https://myungdang.live/'
    })
  }
  return (
    <div className="header">
      <div className="header-logo" />
      <div onClick={shareSNS} className="header-share" />
    </div>
  );
}

export default Header;