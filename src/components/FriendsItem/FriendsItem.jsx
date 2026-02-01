import css from "./FriendsItem.module.css";

export default function FriendsItem({ friends }) {
  const { address, addressUrl, email, imageUrl, phone, title } = friends;
  return (
    <div className={css.friendsItem}>
      <img src={imageUrl} alt="" className={css.logoContainer} />
      <div className={css.friendsInfo}>
        <h2 className={css.friendsInfoTitle}>{title}</h2>
        <div className={css.friendsDetails}>
          <p className={css.textRow}>
            Email:
            <a href={`mailto:${email}`} className={css.ellipsis}>
              {email}
            </a>
          </p>
          <p className={css.textRow}>
            Address:
            <a
              href={addressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={css.ellipsis}
            >
              {address}
            </a>
          </p>
          <p className={css.textRow}>
            Phone:
            <a href={`tel:${phone}`} className={css.ellipsis}>
              {phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
