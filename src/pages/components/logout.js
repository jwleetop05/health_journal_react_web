export default function LogoutButton(props) {
  function handleSignOutFun(event) {
    props.setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  return (
    <div onClick={handleSignOutFun}>
      <img src={props.user.picture} />
    </div>
  );
}
