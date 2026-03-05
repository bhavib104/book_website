import Dock from "./Dock";

function FooterDock() {

  const items = [
    {
      icon: "/icons/instagram.png",
      link: "https://instagram.com"
    },
    {
      icon: "/icons/amazon.png",
      link: "https://amazon.com"
    },
    {
      icon: "/icons/email.png",
      link: "mailto:author@email.com"
    },
    {
      icon: "/icons/linkedin.png",
      link: "https://linkedin.com"
    }
  ];

  return (
    <section
      style={{
        padding: "120px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0a0a0a"
      }}
    >

      <Dock items={items} />

    </section>
  );
}

export default FooterDock;