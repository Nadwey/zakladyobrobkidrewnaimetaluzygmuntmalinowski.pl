import styles from "./App.module.css";
import { Opinia } from "./Opinia";
import { Center, Group } from "@mantine/core";

// images
import tnieDrewno1 from "./img/tnie-drewno-1.jpg";
import szczesliwyCzlowiek from "./img/szczesliwy-czlowiek.webp";
import starosc1 from "./img/starosc-1.webp";
import klient1 from "./img/klient-1.jpg";
import klient3 from "./img/klient-3.jpg";
import klient4 from "./img/klient-4.png";
import obrobkaMetalu1 from "./img/obrobka-metalu-1.jpeg";
import pasja from "./img/pasja.jpg";
import constructionWorker from "./img/construction-worker.png";

function App() {
    return (
        <>
            <img alt="hehe" src={tnieDrewno1} className={styles.bgImage} />
            <div className={styles.topContainer}>
                <div className={styles.zygmuntZdjecie} />
                <div className={styles.opis}>Welcome to the Zygmunt Malinowski's wood and metal processing plant! You won't be disappointed!</div>
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

                            In the year 1954, one of our ancestors, Mr. Albert, started carving a wooden piece out of boredom. Then it exploded because it was bomb and he lost 2 fingers.
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
                            Many satisfied clients
                        </span>
                    </div>
                    <Center>
                        <Group>


                            <Opinia
                                avatar={szczesliwyCzlowiek} 
                                opis=""
                            />
                            <Opinia opis="The metal processing is simply amazing! It's such an effective and primal solution that truly moves me! When metal cutting begins, I feel sparks of excitement! There's so much input and precision involved that I'm in a state of eager anticipation!" />
                            <Opinia avatar={klient1} opis="I love asbestos." />
                            <Opinia
                                avatar={klient3}
                                opis="My Dyson hand held vacuum cleaner stopped working after many years of good use, and I was looking to replace it when I came upon the VacLife Handheld Vacuum at a fraction of the price of a new Dyson, so I decided to give it a go. It does everything we want it for (mainly to pick up dust and crumbs in our kitchen) for a very low price."
                            />
                            <Opinia
                                avatar={klient4}
                                opis="Jestem zachwycony jakością usług świadczonych przez zakłady zajmujące się obróbką metalu i drewna. Ich profesjonalizm i precyzja w pracy są niezwykłe. Obrabiając drewno i metal, potrafią stworzyć prawdziwe arcydzieła, które zachwycają swoją estetyką i funkcjonalnością."
                            />
                        </Group>
                    </Center>
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
                            "We create beauty in wood and steel perfection!"
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
                            Services
                        </span>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <ul>
                        <li>Tabłe - 30zł</li>
                        <li>A two-story boat with steel wings - A residential boat built from wood and equipped with stainless steel wings. - 200 000zł.</li>
                        <li>Skoda Superb Skoda Superb III 190 KM 4x4 DSG L&K - 110 000zł.</li>
                        <li>Planed timber 25mm,32mm,50mm - 500 zł</li>
                    </ul>
                    <div className={styles.vCenter}>
                        <span
                            style={{
                                fontSize: "3rem",
                            }}
                        >
                            Contant Us
                        </span>
                    </div>
                    <ul>
                        <li>Phone - +48 155-WOOD-METAL</li>
                        <li>Email - zygmuntmalinowski@zakladyobrobkidrewnaimetaluzygmuntmalinowski.pl</li>
                    </ul>
                    <img alt="Construction worker" src={constructionWorker} />
                </div>
            </div>
        </>
    );
}

export default App;
