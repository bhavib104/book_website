function AuthorSection() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "60px",
        padding: "100px 40px"
      }}
    >
      {/* Profile Card Placeholder */}
      <div
        style={{
          width: "250px",
          height: "320px",
          background: "#ddd",
          borderRadius: "20px"
        }}
      />

      {/* About Text */}
      <div style={{ maxWidth: "500px" }}>
        <h2>About the Author</h2>

        <p>
          My mother is a passionate writer who expresses emotions through
          poetry, stories, and novels. Her words explore life, feelings,
          relationships, and imagination.
        </p>

        <p>
          Through her writing journey she has inspired readers and continues
          to create meaningful literary work.
        </p>
      </div>
    </section>
  );
}

export default AuthorSection;