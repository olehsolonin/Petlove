import css from './Home.module.css';
import homePhoto1x from '../../img/homePhoto-1x.jpg';
import homePhoto2x from '../../img/homePhoto-2x.jpg';
import Header from '../Header/Header';

export default function Home() {
    return (
        <div className={css.homeContainer}>
            <Header />
            <div className={css.topContainer}>
                <div className={css.textCoantainer}>
                    <h2 className={css.titleText}>
                        Take good <span>care</span> of your small pets
                    </h2>
                    <p className={css.descriptionText}>
                        Choosing a pet for your home is a choice that is meant
                        to enrich your life with immeasurable joy and
                        tenderness.
                    </p>
                </div>
            </div>
            <div className={css.photoContainer}>
                <picture>
                    <source
                        srcSet={`${homePhoto1x} 1x, ${homePhoto2x} 2x`}
                        media="(min-width: 320px)"
                    />
                    <img
                        src={homePhoto1x}
                        alt="Красивая картинка"
                        className={css.photoSettings}
                    />
                </picture>
            </div>
        </div>
    );
}
