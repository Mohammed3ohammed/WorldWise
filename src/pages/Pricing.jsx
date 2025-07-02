import PageNav from "../components/PageNav"
import styles from "./Product.module.css";

export default  function Pricing() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>SimplepPricing <br /> Just $9/month</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor molestias nihil delectus, animi inventore suscipit quas, ad ea optio quisquam impedit placeat! Sed unde corporis laboriosam dolore nemo ea aperiam?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae fugit qui corporis alias amet voluptate fugiat explicabo laudantium rem nihil enim deleniti sapiente, eius, est culpa, natus in officia.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  )
}