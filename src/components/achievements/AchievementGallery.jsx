import CircularGallery from "./CircularGallery";

function AchievementGallery() {

  const items = [
    {
      image: "/images/award1.jpg",
      text: "Literary Award"
    },
    {
      image: "/images/award2.jpg",
      text: "Book Launch"
    },
    {
      image: "/images/award3.jpg",
      text: "Poetry Event"
    },
    {
      image: "/images/award4.jpg",
      text: "Author Meet"
    }
  ];

  return (
    <section style={{ height: "700px", background: "#111" }}>

      <CircularGallery
        items={items}
        bend={1}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollSpeed={2}
        scrollEase={0.05}
      />

    </section>
  );
}

export default AchievementGallery;