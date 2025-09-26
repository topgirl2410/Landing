import { steps } from "../../utils/content"
import cala from "../../../public/cala.jpg"
import Rating from "./Rating"

export default function Steps() {
  return <section>
    <div>
      <div>
        <h2>Travel to make sweet memories</h2>
        <p>Find the perfect vacation getaway</p>
      </div>

      <div>
        <div>
          <ul>
            {steps.map((step) => (<li key={step.id}>
              <span>{step.id}</span>
              <h3>{step.heading}</h3>
              <p>{step.description}</p>
            </li>))}</ul>
          <a href="">Start you explore</a>
        </div>

        <figure>
          <img src={cala} alt="Photo Menorca cove" />
          <Rating />
        </figure>
      </div>
    </div>
  </section>

}
