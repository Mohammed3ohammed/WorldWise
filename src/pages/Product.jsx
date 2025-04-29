import PageNav from "../components/PageNav";
import sections from "./Product.module.css";

export default function Product() {
  return (
    <main className={sections.product}>
      <PageNav />

      <section>
        <img src="img-1.jpg" alt="" />
        <div>
          <h2>About WorldWide.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facilis fugiat nam voluptatibus necessitatibus? 
            Voluptatem nostrum molestias cum magni, odio fugiat at, natus soluta eum quo adipisci ut sint excepturi!</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, repudiandae impedit ullam voluptas amet eius nulla?
              Temporibus repellat quaerat eaque ipsum autem pariatur hic velit sapiente, iusto nobis animi asperiores.
            </p>
          </div> 
      </section>
    </main>
  )
}