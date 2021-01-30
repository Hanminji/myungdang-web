function Header({changeTab}) {
  return (
    <div>
      <button onClick={() => {changeTab('rank')}}>RANK</button>
      <button onClick={() => {changeTab('near')}}>NEAR</button>
    </div>
  );
}

export default Header;
