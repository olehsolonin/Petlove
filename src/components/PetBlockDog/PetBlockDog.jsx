import css from "./PetBlockDog.module.css";
import React from "react";

// export default function PetBlockDog() {
//   return (
//     <div className={css.PetContainer}>
//       <div className={css.background}></div>
//     </div>
//   );
// }

export default function PetBlockDog({ src, alt, width = 80, height = 80 }) {
  return (
    <div className={css.PetContainer} style={{ width, height }}>
      {src ? (
        <img src={src} alt={alt} className={css.avatarImage} />
      ) : (
        <div className={css.avatarPlaceholder}></div>
      )}
    </div>
  );
}
