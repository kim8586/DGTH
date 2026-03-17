function UserMenu({
  user,
  showUserMenu,
  setShowUserMenu,
  handleLogout,
  handleChangeName,
  handleChangePassword
}) {
  return (
    <div style={{
      position:"absolute",
  top:"7px",
  left:"40px"
}}

onMouseLeave={()=>setShowUserMenu(false)}
>

       
      <div
        onClick={() => setShowUserMenu(!showUserMenu)}
        style={{
          background:"#e4e0fe",
          color:"#333",
          padding:"10px 20px",
          borderRadius:"6px",
          cursor:"pointer",
          fontWeight:"bold",
          fontSize:"14px"
        }}
      >
        👤 {user?.displayName || user?.email}
      </div>

      {showUserMenu && (
        <div style={{
          marginTop:"5px",
          background:"#fff",
          border:"1px solid #ccc",
          borderRadius:"6px",
          boxShadow:"0 5px 10px rgba(0,0,0,0.1)"
        }}>

          <div
            onClick={() => {
              handleChangeName();
              setShowUserMenu(false);
            }}
            style={{padding:"8px", cursor:"pointer", color:"red"}}
          >
            ✏️ Đổi tên
          </div>

          <div
            onClick={() => {
              handleChangePassword();
              setShowUserMenu(false);
            }}
            style={{padding:"8px", cursor:"pointer", color:"red"}}
          >
            🔑 Đổi mật khẩu
          </div>

          <div
            onClick={() => {
              handleLogout();
              setShowUserMenu(false);
            }}
            style={{padding:"8px", cursor:"pointer", color:"red"}}
          >
            🚪 Đăng xuất
          </div>

        </div>
      )}
    </div>
  );
}
