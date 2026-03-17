function Login({ email, password, setEmail, setPassword, handleLogin }) {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>

      <div style={{
        background:"#ffffff",
        padding:"35px",
        borderRadius:"12px",
        width:"320px",
        boxShadow:"0 10px 25px rgba(0,0,0,0.15)",
        border:"1px solid #eee"
      }}>

        <h3 style={{
          textAlign:"center",
          fontSize:"20px",
          fontWeight:"bold",
          marginBottom:"20px",
          color:"#4f46e5"
        }}>
          Đăng nhập giáo viên
        </h3>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{width:"100%",padding:"10px",marginBottom:"12px"}}
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{width:"100%",padding:"10px",marginBottom:"12px"}}
        />

        <button
          onClick={handleLogin}
          style={{
            width:"100%",
            padding:"10px",
            background:"#4f46e5",
            color:"white",
            border:"none",
            borderRadius:"6px"
          }}
        >
          Đăng nhập
        </button>

      </div>
    </div>
  );
}
