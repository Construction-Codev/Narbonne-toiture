type ContactNotificationEmailProps = {
  name: string;
  phone: string;
  email?: string;
  city: string;
  service: string;
  message: string;
  receivedAt: string;
};

export default function ContactNotificationEmail({
  name,
  phone,
  email,
  city,
  service,
  message,
  receivedAt,
}: ContactNotificationEmailProps) {
  const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

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
      <table
        role="presentation"
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          backgroundColor: "#FFFFFF",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                padding: "32px",
                backgroundColor: "#1E2529",
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
                  color: "#FFFFFF",
                  fontSize: "28px",
                  lineHeight: "34px",
                }}
              >
                Nouvelle demande de devis
              </h1>

              <div
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  padding: "8px 12px",
                  backgroundColor: "#B84F32",
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {service}
              </div>
            </td>
          </tr>

          <tr>
            <td style={{ padding: "32px" }}>
              <SectionTitle>Contact</SectionTitle>

              <InfoRow label="Nom" value={name} />
              <InfoRow label="Téléphone" value={phone} />
              {email && <InfoRow label="E-mail" value={email} />}
              <InfoRow label="Commune" value={city} />

              <div
                style={{
                  margin: "32px 0",
                  borderTop: "1px solid #E8E1D5",
                }}
              />

              <SectionTitle>Demande</SectionTitle>

              <InfoRow label="Type de travaux" value={service} />

              <div style={{ marginTop: "24px" }}>
                <div
                  style={{
                    marginBottom: "8px",
                    color: "#777D80",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Message
                </div>

                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#FAF8F3",
                    borderLeft: "3px solid #B84F32",
                    fontSize: "15px",
                    lineHeight: "24px",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {message}
                </div>
              </div>

              <div
                style={{
                  margin: "32px 0",
                  borderTop: "1px solid #E8E1D5",
                }}
              />

              <div
                style={{
                  color: "#777D80",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Reçu le
              </div>

              <div
                style={{
                  marginTop: "5px",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {receivedAt}
              </div>

              <table
                role="presentation"
                cellPadding="0"
                cellSpacing="0"
                style={{ marginTop: "28px" }}
              >
                <tbody>
                  <tr>
                    <td>
                      <a
                        href={phoneHref}
                        style={{
                          display: "inline-block",
                          padding: "14px 20px",
                          backgroundColor: "#B84F32",
                          color: "#FFFFFF",
                          fontSize: "14px",
                          fontWeight: 700,
                          textDecoration: "none",
                        }}
                      >
                        Appeler le client
                      </a>
                    </td>

                    {email && (
                      <td style={{ paddingLeft: "10px" }}>
                        <a
                          href={`mailto:${email}`}
                          style={{
                            display: "inline-block",
                            padding: "13px 20px",
                            border: "1px solid #D7D7D7",
                            color: "#1E2529",
                            fontSize: "14px",
                            fontWeight: 700,
                            textDecoration: "none",
                          }}
                        >
                          Répondre par e-mail
                        </a>
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td
              style={{
                padding: "22px 32px",
                backgroundColor: "#FAF8F3",
                color: "#777D80",
                fontSize: "12px",
                lineHeight: "18px",
              }}
            >
              Narbonne Toiture · 06 62 12 56 11
              <br />
              Narbonne &amp; Aude
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        marginBottom: "18px",
        color: "#B84F32",
        fontSize: "12px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "1.5px",
      }}
    >
      {children}
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <table
      role="presentation"
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{
        borderBottom: "1px solid #EEEAE3",
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              width: "145px",
              padding: "13px 0",
              color: "#777D80",
              fontSize: "13px",
            }}
          >
            {label}
          </td>

          <td
            style={{
              padding: "13px 0",
              color: "#1E2529",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            {value}
          </td>
        </tr>
      </tbody>
    </table>
  );
}