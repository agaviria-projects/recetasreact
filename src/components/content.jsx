import Card from "./card";

export default function Content() {
  return (
    <div className="col-md-9">
      <div className="row justify-content-center g-4">

        <div className="col-md-6 col-lg-4">
          <Card
            imagen="https://img.freepik.com/foto-gratis/muslos-pollo-plancha-parrilla-llamas-verduras-asadas-tomates-patatas-semillas-pimiento-sal_1150-37782.jpg"
            titulo="Muslos de pollo"
            descripcion="Jugosos muslos marinados con hierbas y verduras asadas."
            rating={5}
            opiniones={12}
          />
        </div>

        <div className="col-md-6 col-lg-4">
          <Card
            imagen="https://img.freepik.com/fotos-premium/filete-monton-verduras-tabla-cortar_1272888-2707.jpg?w=740"
            titulo="Chuletas de cerdo BBQ"
            descripcion="Chuletas jugosas bañadas en salsa barbacoa ahumada."
            rating={4}
            opiniones={9}
          />
        </div>

        <div className="col-md-6 col-lg-4">
          <Card
            imagen="https://img.freepik.com/foto-gratis/filete-servido-papas-fritas-tomates_140725-3181.jpg?t=st=1743956942~exp=1743960542~hmac=fa4c3ec0de952d96b3f977be05ae4cc5c3e3565f7cd1c9067470f1122e0b2667&w=740"
            titulo="Asado criollo"
            descripcion="Corte tradicional con papas y verduras grilladas."
            rating={5}
            opiniones={18}
          />
        </div>

      </div>
    </div>
  );
}

