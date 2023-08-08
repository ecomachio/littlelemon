import Carousel from "./SpecialsCarousel";
import GreekSalad from "../../../assets/food/greek-salad.webp";
import Bruschetta from "../../../assets/food/bruschetta.jpeg";
import LemonDessert from "../../../assets/food/lemon-dessert.webp";
import SpecialCard from "./CardInfo/SpecialCard";
import menu from "../../../assets/menu.webp";

const Specials = () => {
  return (
    <section className="specials">
      <article className="specials-topbar">
        <h1>The featured offerings for this week.</h1>
        <a
          className="action-button"
          href={menu}
          target="_blank"
          rel="noreferrer"
        >
          Online Menu
        </a>
      </article>

      <section className="specials-cards">
        <SpecialCard
          image={GreekSalad}
          name="Greek Salad"
          price="$14.50"
          description="A revitalizing salad composed of tomatoes, lettuce, feta cheese, and olives. Adorned with a seasoning of salt, hot pepper, and drizzled with olive oil."
        />
        <SpecialCard
          image={Bruschetta}
          name="Bruschetta"
          price="$20.99"
          description="Toasted bread crowned with tomato, prosciutto, and cheese, elegantly seasoned with a sprinkle of salt and a drizzle of olive oils."
        />
        <SpecialCard
          image={LemonDessert}
          name="Lemon Dessert"
          price="$10.50"
          description="Newly baked lemon-infused bread, delicately coated with a blend of salt and sugar, then lightly dusted with a layer of citrus essence and lemon zest."
        />
      </section>

      <section className="specials-carousel">
        <Carousel />
      </section>
    </section>
  );
};

export default Specials;
