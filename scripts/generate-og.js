const fs = require("fs");
const path = require("path");
const React = require("react");
const satori = require("satori").default || require("satori");
const { Resvg } = require("@resvg/resvg-js");

async function generateOG() {
  console.log("Generating iconic Vercel OG image using Satori & Geist font...");

  const boldFontPath = path.join(__dirname, "fonts/Geist-Bold.ttf");
  const regFontPath = path.join(__dirname, "fonts/Geist-Regular.ttf");

  const boldFont = fs.readFileSync(boldFontPath);
  const regFont = fs.readFileSync(regFontPath);

  const photoPath = path.join(__dirname, "../src/59f8ca04-460f-4995-bd3d-96ab2b52648a.jpeg");
  let photoDataUri = "";
  if (fs.existsSync(photoPath)) {
    const base64 = fs.readFileSync(photoPath).toString("base64");
    photoDataUri = `data:image/jpeg;base64,${base64}`;
  }

  const element = React.createElement(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#000000",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.14) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.14) 2%, transparent 0%)",
        backgroundSize: "60px 60px",
        padding: "60px 72px",
        color: "#ffffff",
        position: "relative",
        fontFamily: "Geist"
      }
    },
    // Top Bar
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%"
        }
      },
      React.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", gap: "14px" } },
        React.createElement(
          "svg",
          {
            width: "30",
            height: "26",
            viewBox: "0 0 76 65",
            fill: "#ffffff"
          },
          React.createElement("path", { d: "M37.5274 0L75.0548 65H0L37.5274 0Z" })
        ),
        React.createElement(
          "span",
          {
            style: {
              fontSize: "14px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#a1a1aa",
              fontWeight: 700
            }
          },
          "NNEJI CHIDI BEN // LEAD SOFTWARE ENGINEER"
        )
      ),
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            backgroundColor: "rgba(24, 24, 27, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "9999px",
            fontSize: "13px",
            color: "#e4e4e7"
          }
        },
        React.createElement("div", {
          style: {
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#10b981",
            boxShadow: "0 0 12px #10b981"
          }
        }),
        React.createElement("span", null, "Available for Principal & Lead Roles")
      )
    ),

    // Center Headline & Badges
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginTop: "10px"
        }
      },
      React.createElement(
        "div",
        {
          style: {
            fontSize: "56px",
            lineHeight: 1.12,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#ffffff"
          }
        },
        "Architecting resilient backends & precision web systems."
      ),
      React.createElement(
        "div",
        {
          style: {
            fontSize: "21px",
            color: "#a1a1aa",
            fontWeight: 400,
            maxWidth: "980px",
            lineHeight: 1.45
          }
        },
        "Systems programming, distributed architectures, and framework design. Creator of Djangors (Rust), Spryteo (WASM), Bloom Platform & Crush."
      ),
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            gap: "10px",
            marginTop: "12px"
          }
        },
        React.createElement(
          "div",
          {
            style: {
              padding: "7px 15px",
              backgroundColor: "rgba(255, 255, 255, 0.16)",
              border: "1px solid rgba(255, 255, 255, 0.35)",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 700
            }
          },
          "Djangors (Rust · 32 Crates)"
        ),
        React.createElement(
          "div",
          {
            style: {
              padding: "7px 15px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 700
            }
          },
          "Spryteo (WASM)"
        ),
        React.createElement(
          "div",
          {
            style: {
              padding: "7px 15px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 700
            }
          },
          "Bloom (Flutter)"
        ),
        React.createElement(
          "div",
          {
            style: {
              padding: "7px 15px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "8px",
              fontSize: "13px",
              color: "#d4d4d8"
            }
          },
          "Crush (Docker Alt)"
        ),
        React.createElement(
          "div",
          {
            style: {
              padding: "7px 15px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "8px",
              fontSize: "13px",
              color: "#d4d4d8"
            }
          },
          "Finnitrex (UK)"
        )
      )
    ),

    // Bottom Bar
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "24px",
          borderTop: "1px solid rgba(255, 255, 255, 0.14)",
          width: "100%"
        }
      },
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "16px"
          }
        },
        photoDataUri
          ? React.createElement("img", {
              src: photoDataUri,
              style: {
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid rgba(255, 255, 255, 0.35)"
              }
            })
          : null,
        React.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column" } },
          React.createElement(
            "span",
            { style: { fontSize: "17px", fontWeight: 700, color: "#ffffff" } },
            "Nneji Chidi Ben"
          ),
          React.createElement(
            "span",
            {
              style: {
                fontSize: "13px",
                color: "#71717a",
                marginTop: "2px"
              }
            },
            "chidiisking7@gmail.com · Lagos, Nigeria"
          )
        )
      ),

      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 18px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "9999px",
            fontSize: "13px",
            color: "#a1a1aa"
          }
        },
        React.createElement(
          "svg",
          {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2"
          },
          React.createElement("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
          React.createElement("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
        ),
        React.createElement("span", null, "chidiportfolio.netlify.app")
      )
    )
  );

  const svg = await satori(element, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Geist", data: boldFont, weight: 700, style: "normal" },
      { name: "Geist", data: regFont, weight: 400, style: "normal" }
    ]
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  const previewJpgPath = path.join(__dirname, "../public/preview.jpg");
  const ogPngPath = path.join(__dirname, "../public/og.png");
  fs.writeFileSync(previewJpgPath, pngBuffer);
  fs.writeFileSync(ogPngPath, pngBuffer);

  // If build dir exists, write there as well
  const buildDir = path.join(__dirname, "../build");
  if (fs.existsSync(buildDir)) {
    fs.writeFileSync(path.join(buildDir, "preview.jpg"), pngBuffer);
    fs.writeFileSync(path.join(buildDir, "og.png"), pngBuffer);
  }

  console.log(`Vercel OG image generated successfully! (${pngBuffer.length} bytes)`);
}

generateOG().catch((err) => {
  console.error("Error generating OG image:", err);
  process.exit(1);
});
