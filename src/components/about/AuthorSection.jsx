import ProfileCard from "./ProfileCard";

function AuthorSection() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "80px",
        padding: "120px 40px",
        flexWrap: "wrap"
      }}
    >
      {/* Profile Card */}
      <ProfileCard
        name="Your Mom's Name"
        title="Author | Poet | Story Writer"
        handle="authorlife"
        status="Writing"
        contactText="Follow"
        avatarUrl="/images/mom.jpg"
        showUserInfo={false}
        enableTilt={true}
        behindGlowEnabled
      />

      {/* About Text */}
      <div style={{ maxWidth: "500px" }}>
        <h2>About the Author</h2>

        <p>
          My mother is a passionate writer who expresses emotions through
          poetry, stories, and novels. Her writing explores the beauty of
          life, human emotions, and imagination.
        </p>

        <p>
          Through her books she inspires readers with meaningful storytelling
          and heartfelt poetry.
        </p>
      </div>
    </section>
  );
}

export default AuthorSection;