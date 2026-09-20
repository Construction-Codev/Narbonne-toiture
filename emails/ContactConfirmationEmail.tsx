type ContactConfirmationEmailProps = {
  name: string;
  city: string;
  service: string;
};

export default function ContactConfirmationEmail({
  name,
  city,
  service,
}: ContactConfirmationEmailProps) {
  return (
    <div
      style={{
        margin: 0,
        padding: "32px 16px",
        backgroundColor: "#F5F1E8",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#1E2529",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            padding: "30px",
            backgroundColor: "#1E2529",
            color: "#FFFFFF",
          }}
        >
          <div
            style={{
              color: "#D8C6A5",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            NARBONNE TOITURE
          </div>

          <h1
            style={{
              margin: "14px 0 0",
              fontSize: "26px",
              lineHeight: "32px",
            }}
          >
            Votre demande a bien été transmise.
          </h1>
        </div>

        <div style={{ padding: "32px" }}>
          <p style={{ margin: "0 0 20px", lineHeight: "25px" }}>
            Bonjour {name},
          </p>

          <p
            style={{
              margin: "0",
              color: "#555D61",
              lineHeight: "25px",
            }}
          >
            Merci d&apos;avoir contacté Narbonne Toiture. Votre demande
            concernant <strong>{service}</strong> à <strong>{city}</strong> a
            bien été reçue.
          </p>

          <div
            style={{
              marginTop: "28px",
              padding: "20px",
              backgroundColor: "#FAF8F3",
              borderLeft: "3px solid #B84F32",
            }}
          >
            <div
              style={{
                color: "#777D80",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Contact direct
            </div>

            <a
              href="tel:+33662125611"
              style={{
                display: "inline-block",
                marginTop: "8px",
                color: "#1E2529",
                fontSize: "20px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              06 62 12 56 11
            </a>
          </div>
        </div>

        <div
          style={{
            padding: "22px 32px",
            backgroundColor: "#FAF8F3",
            color: "#777D80",
            fontSize: "12px",
          }}
        >
          Narbonne Toiture · Narbonne &amp; Aude
        </div>
      </div>
    </div>
  );
}