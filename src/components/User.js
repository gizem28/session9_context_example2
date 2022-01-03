import { useUserContext } from "../context/UserContextProvider";

const User = ({ user }) => {
  //? user bilgisini parent'tan props ile aldık
  const { id, login, avatar_url, width } = user;

  //! Ancak,changeImageWidth fonksiyonunu useUserContext yardımıyla Context'ten okuduk
  const { changeImageWidth } = useUserContext();

  return (
    <div>
      <h3>{login}</h3>
      <img src={avatar_url} style={{width:300, height:300}} alt="" width={width} />
      <br/><br/>
      <div>
        <label htmlFor="width">Image width(px)</label>
        <input
          className="width"
          type="number"
          value={width}
          onChange={(e) => changeImageWidth(id, e.target.value)}
        />
      </div>
    </div>
  );
};

export default User;
