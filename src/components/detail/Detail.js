const DetailList = () => {
  const Dummy_Detail = {
    name: "Tower Street Apartments",
    address: "Elton St 125 New york",
    distance: "Excellent location - 500m from center",
    price: "Book a stay over $114 at this property and get a free airport taxi",
    photos: [
      "./images/hotel_detail_1.jpg",
      "./images/hotel_detail_2.jpg",
      "./images/hotel_detail_3.jpg",
      "./images/hotel_detail_4.jpg",
      "./images/hotel_detail_5.jpg",
      "./images/hotel_detail_6.jpg",
    ],
    title: "Stay in the heart of City",
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 955,
  };
  return (
    <div>
      <div>
        <h2>{Dummy_Detail.name}</h2>
        <p>{Dummy_Detail.address}</p>
        <p>{Dummy_Detail.distance}</p>
        <p>{Dummy_Detail.price}</p>
      </div>
      <div>
        <img src={Dummy_Detail.photos[0]}></img>
        <img src={Dummy_Detail.photos[1]}></img>

        <img src={Dummy_Detail.photos[2]}></img>
        <img src={Dummy_Detail.photos[3]}></img>
        <img src={Dummy_Detail.photos[4]}></img>
        <img src={Dummy_Detail.photos[5]}></img>
      </div>
      <div>
        <h3>{Dummy_Detail.title}</h3>
        <p>{Dummy_Detail.description}</p>
      </div>
      <div>
        <p>Perfect for a 9-night stay!</p>
        <p>
          Located in the real heat of kralov this property has an excelent
          location score of 9.8
        </p>
        <p>
          <b>${Dummy_Detail.nine_night_price}</b>(9 night)
        </p>
      </div>
    </div>
  );
};
export default DetailList;
