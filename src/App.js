import styles from "./App.module.css";
import { Carousel } from "@mantine/carousel";
import { useEffect, useState } from "react";
import { Opinia } from "./Opinia";
import { Group } from "@mantine/core";

// images
// import tnieDrewno1 from "./img/tnie-drewno-1.jpg";
import tnieDrewno2 from "./img/tnie-drewno-2.jpg";
import starosc1 from "./img/starosc-1.webp";
import klient1 from "./img/klient-1.jpg";
import klient2 from "./img/klient-2.jpg";
import klient3 from "./img/klient-3.jpg";
import klient4 from "./img/klient-4.png";
import obrobkaMetalu1 from "./img/obrobka-metalu-1.jpeg";
import obrobkaMetalu2 from "./img/obrobka-metalu-2.jpg";
import obrobkaMetalu3 from "./img/obrobka-metalu-3.jpg";
import obrobkaMetalu4 from "./img/obrobka-metalu-4.jpg";
import pasja from "./img/pasja.jpg";
import constructionWorker from "./img/construction-worker.png";

function App() {
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
                        <img alt="tnie drewno" className={styles.carouselImage} src={tnieDrewno2} />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <img alt="obróbka metalu" className={styles.carouselImage} src={obrobkaMetalu2} />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <img alt="obróbka metalu" className={styles.carouselImage} src={obrobkaMetalu3} />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <img alt="obróbka metalu" className={styles.carouselImage} src={obrobkaMetalu4} />
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
                        <img alt="starość" src={starosc1} />
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
                            Metal
                        </div>
                        <img alt="obróbka metalu" src={obrobkaMetalu1} />
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
                        <Opinia
                            avatar={klient4}
                            opis="Jestem zachwycony jakością usług świadczonych przez zakłady zajmujące się obróbką metalu i drewna. Ich profesjonalizm i precyzja w pracy są niezwykłe. Obrabiając drewno i metal, potrafią stworzyć prawdziwe arcydzieła, które zachwycają swoją estetyką i funkcjonalnością."
                        />
                    </Group>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className={styles.vCenter}>
                        <span
                            style={{
                                fontSize: "3rem",
                                fontStyle: "italic",
                            }}
                        >
                            "Tworzymy piękno w drewnie i stalowej doskonałości!"
                        </span>
                    </div>
                    <img alt="pasja" src={pasja} />
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
                            Usługi
                        </span>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <ul>
                        <li>Stuł - 30zł</li>
                        <li>Dwupiętrowa łódź ze stalowymi skrzydłami - Łódź mieszkalna zbudowana z drewna i wyposażona w skrzydła ze stali nierdzewnej - 200 000 złotych.</li>
                        <li>Skoda Superb Skoda Superb III 190 KM 4x4 DSG L&K - 110 000 złotych.</li>
                        <li>Tarcica obrzynana 25mm,32mm,50mm - 500 zł</li>
                    </ul>
                    <div className={styles.vCenter}>
                        <span
                            style={{
                                fontSize: "3rem",
                            }}
                        >
                            Kontakt
                        </span>
                    </div>
                    <ul>
                        <li>Telefon - +48 155-DREWNO-METAL</li>
                        <li>Email - zygmuntmalinowski@zakladyobrobkidrewnaimetaluzygmuntmalinowski.pl</li>
                    </ul>
                    <img alt="Construction worker" src={constructionWorker} />
                </div>
            </div>
        </div>
    );
}

export default App;
