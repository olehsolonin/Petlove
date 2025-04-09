import css from "./FriendsItem.module.css";

export default function FriendsItem({ friends }) {
  const { address, addressUrl, email, imageUrl, phone, title, url } = friends;
  return (
    <div className={css.friendsItem}>
      <img src={imageUrl} alt="" className={css.logoContainer} />
      <div className={css.friendsInfo}>
        {" "}
        <h2 className={css.friendsInfoTitle}>{title}</h2>
        <div className={css.friendsDetails}>
          <p>
            Email:
            <span>
              <a href={`mailto:${email}`} className={css.ellipsis}>
                {email}
              </a>
            </span>{" "}
          </p>
          <p>
            Address:{" "}
            <span>
              {" "}
              <a
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={css.ellipsis}
              >
                {address}
              </a>
            </span>{" "}
          </p>
          <p>
            Phone:{" "}
            <span>
              {" "}
              <a href={`tel:${phone}`} className={css.ellipsis}>
                {phone}
              </a>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
