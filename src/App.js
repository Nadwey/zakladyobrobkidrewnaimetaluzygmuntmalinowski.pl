import styles from "./App.module.css";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, Embla } from "@mantine/carousel";
import { useEffect, useRef, useState } from "react";
import { Opinia } from "./Opinia";
import { Flex, Group } from "@mantine/core";

// images
import tnieDrewno1 from "./img/tnie-drewno-1.jpg";
import tnieDrewno2 from "./img/tnie-drewno-2.jpg";
import zygmuntMalinowski1 from "./img/zygmunt-malinowski-1.png";
import pracaDrewno1 from "./img/praca-drewno-1.jpg";
import starosc1 from "./img/starosc-1.webp";
import klient1 from "./img/klient-1.jpg";
import klient2 from "./img/klient-2.jpg";
import klient3 from "./img/klient-3.jpg";
import obrobkaMetalu1 from "./img/obrobka-metalu-1.jpeg";
import obrobkaMetalu2 from "./img/obrobka-metalu-2.jpg";
import obrobkaMetalu3 from "./img/obrobka-metalu-3.jpg";
import obrobkaMetalu4 from "./img/obrobka-metalu-4.jpg";

function App() {
    /**
     * @type {[Embla, null]}
     */
    const [embla, setEmbla] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("weg");
            console.log(embla);
            if (embla) {
                embla.scrollNext();
            }
        }, 6000);
        return () => clearInterval(interval);
    }, [embla]);

    return (
        <div>
            <div className={styles.carouselContainer}>
                <Carousel loop getEmblaApi={setEmbla} draggable={false} withControls={false} height="100%" sx={{ flex: 1 }}>
                    <Carousel.Slide>
                        <img className={styles.carouselImage} src={tnieDrewno1} />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <img className={styles.carouselImage} src={tnieDrewno2} />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <img className={styles.carouselImage} src={obrobkaMetalu2} />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <img className={styles.carouselImage} src={obrobkaMetalu3} />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <img className={styles.carouselImage} src={obrobkaMetalu4} />
                    </Carousel.Slide>
                </Carousel>
            </div>
            <div className={styles.topContainer}>
                <div className={styles.zygmuntZdjecie} />
                <div className={styles.opis}>Witaj w zakładach obróbki drewna i metalu Zygmunta Malinowskiego!</div>
            </div>
            <div className={styles.content}>
                <div
                    style={{
                        position: "relative",
                    }}
                >
                    <div className={styles.imageAndText}>
                        <img src={starosc1} />
                        <div>
                            W 1954 r., jeden z naszych przodków, Pan Albert, zaczął z nudów rzeźbić w kawałku pnia kamieniem, po chwili dostrzegł w drzewie pewien tajemniczy metalowy przedmiot, zaczął
                            ku mu kopać i okazało się że to jakiś niewybuch, odciął sobie 2 palce.
                        </div>
                    </div>
                    <div className={styles.imageAndText}>
                        <div
                            style={{
                                textAlign: "right",
                            }}
                        >
                            undefined
                        </div>
                        <img src={obrobkaMetalu1} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className={styles.vCenter}>
                        <span
                            style={{
                                fontSize: "3rem",
                            }}
                        >
                            Multum zadowolonych klientów
                        </span>
                    </div>
                    <Group position="center">
                        <Opinia
                            avatar={klient2}
                            opis="Obróbka metalu je wprost niesamowita! To tak skuteczne i pierwotne rozwiązanoe, które naprawdę rozczuli! Kiedy czięcie metelu zaczyna się, czuję iskry ekscytacji! Jest tak wiele wkładu i precyzji, że jestem w jelowej zaziądzie!"
                        />
                        <Opinia opis="Serwis godny polecenia, właściciel bardzo pomocny, teraz oszukuje obce dzieci moim nowym stołem z miejscem na schowanie partnera!" />
                        <Opinia avatar={klient1} opis="Polecam" />
                        <Opinia
                            avatar={klient3}
                            opis="Odkurzacz bardzo dobry, godny polecenia. Rzadko się zdarza żeby w tym przedziale cenowym kupić odkurzacz z taką ilością osprzętu. Posiada wszystkie końcówki do odkurzania kazdej powierzchni. Filtr Hepa 13 zapewnia w czasie pracy czyste powietrze bez kurzu, roztoczy i alergenów. Polecam"
                        />
                    </Group>
                </div>
            </div>
        </div>
    );
}

export default App;
