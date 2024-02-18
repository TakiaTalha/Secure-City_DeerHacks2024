import Image from "next/image";
import styles from "./home.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.first}>
      <div className={styles.image_container}>
          <Image src="/bg1.PNG" alt="city" width={1200} height={500} 
          className= {styles.img}/>
        <div className={styles.textOverlay}>
        <h1 className={styles.title1}> 
         Empowering Communities for Safer Living 
        </h1>
        </div>
        </div>
       </section>
       <section className={styles.blank}>
          <h1> ok</h1>
         </section>
        <section className={styles.second}>
          <div className={styles.block_container}>
            <div className={styles.row_second}>
              <div className={styles.text2}>
                <h2>  Your world is <br />safer with us</h2>
              </div>
              <div className={styles.card_container}>
                <div className={styles.card1}>
                  <div className={styles.card1_text}>
                  <img src="/grouplogo.png" alt="logo" width={80} height={20} />
                  <h4> Robbery at Store Reported</h4>
                  <p> location </p>
                  </div>
                </div>
                <div className={styles.card2}></div>
                <div className={styles.card3}></div>
            </div>
            </div>
          </div>
        </section>
        <section className={styles.blank}>
          <h1> ok</h1>
         </section>
        <section className={styles.third}>
          <div className={styles.row}>
            <div className={styles.col}>
             <h1 className={styles.colname}> EXPLORE</h1>
              <p>Explore what is happening <br/>in the surrounding.</p>
            </div>
            <div className={styles.col}>
            <h1 className={styles.colname}>REPORT</h1>
              <p>Report a crime and notify <br/>people in this area/people <br/>
              will receive the alarm </p>
            </div>
            <div className={styles.col}>
            <h1 className={styles.colname3}> SUPPORT</h1>
              <p>Contact local police service<br/>learn
              self defense course here!.</p>
            </div>
          </div>
        </section>
        <section className={styles.blank}>
          <h1> ok</h1>
         </section>
        <section className={styles.fourth}>
          <div className={styles.city_container}>
            <div className={styles.circle}>
              <img src="/toronto.jpg" alt="toronto" width={150} height={150} />
              <div className={styles.city_name}>Toronto</div>
              </div>
              <div className={styles.circle}>
              <img src="/toronto_east.jpg" alt="toronto" width={150} height={150} />
              <div className={styles.city_name}> East Toronto</div>
              </div>
              <div className={styles.circle}>
              <img src="/scarborough.jpg" alt="toronto" width={150} height={150} />
              <div className={styles.city_name}>Scarborough</div>
              </div>
              <div className={styles.circle}>
              <img src="/NorthYork.jpg" alt="toronto" width={150} height={150} />
              <div className={styles.city_name}>NorthYork</div>
              </div>
              <div className={styles.circle}>
              <img src="/eto.png" alt="toronto" width={150} height={150} />
              <div className={styles.city_name}>Etobicoke</div>
            </div>
          </div>
          <div className={styles.cityn_container}>
              <div className={styles.city_name}>Toronto</div>
  
              <div className={styles.city_name}> East Toronto</div>
      
              <div className={styles.city_name}>Scarborough</div>
              
              <div className={styles.city_name}>NorthYork</div>
      
              <div className={styles.city_name}>Etobicoke</div>
          </div>
        </section>
        <section className={styles.blank}>
          <h1> ok</h1>
         </section>
      </main>
  );
}
