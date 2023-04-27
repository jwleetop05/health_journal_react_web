import { useState } from "react";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
export default function LoginPage() {
  const [user, setUser] = useState({});
  return (
    <div>
      <LoginButton setUser={setUser} user={user}></LoginButton>
      <LogoutButton setUser={setUser} user={user}></LogoutButton>
      {user && (
        <div>
          <h1>{user.name}</h1>
        </div>
      )}
    </div>
  );
}
