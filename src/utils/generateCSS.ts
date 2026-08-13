export function generateCSS() {
  return `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  min-height: 100%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #ffffff;
  color: #000000;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  width: 100%;
}

.logo {
  font-weight: bold;
  font-size: 20px;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.hero {
  width: 100%;
  padding: 100px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero p {
  margin-bottom: 20px;
}

.hero button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.heading {
  width: 100%;
  min-width: 0;
  margin-bottom: 20px;
}

.paragraph {
  width: 100%;
  min-width: 0;
  line-height: 1.6;
  margin-bottom: 20px;
}

.custom-button {
  max-width: 100%;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
}

.section {
  width: 100%;
  min-width: 0;
  padding: 80px 20px;
}

.card {
  width: 100%;
  min-width: 0;
  height: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-sizing: border-box;
}

.card h3 {
  margin-bottom: 10px;
}

.card p {
  line-height: 1.6;
}

.container {
  width: 100%;
  min-width: 0;
  padding: 20px;
  border: 2px dashed #94a3b8;
  border-radius: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.row {
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: row;
  gap: 16px;
  box-sizing: border-box;
}

.stack {
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
}

.container > *,
.row > *,
.stack > * {
  min-width: 0;
  box-sizing: border-box;
}

.container[data-layout="grid"],
.row[data-layout="grid"] {
  display: grid;
}

.container[data-layout="grid"] > *,
.row[data-layout="grid"] > * {
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
}

.container[data-columns="1"],
.row[data-columns="1"] {
  grid-template-columns: repeat(
    1,
    minmax(0, 1fr)
  );
}

.container[data-columns="2"],
.row[data-columns="2"] {
  grid-template-columns: repeat(
    2,
    minmax(0, 1fr)
  );
}

.container[data-columns="3"],
.row[data-columns="3"] {
  grid-template-columns: repeat(
    3,
    minmax(0, 1fr)
  );
}

.container[data-columns="4"],
.row[data-columns="4"] {
  grid-template-columns: repeat(
    4,
    minmax(0, 1fr)
  );
}

.image-container {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin-bottom: 20px;
  box-sizing: border-box;
  overflow: hidden;
}

.image {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.image-placeholder {
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5e7eb;
  color: #6b7280;
  border: 2px dashed #94a3b8;
  border-radius: 8px;
}

.footer {
  width: 100%;
  min-width: 0;
  padding: 40px;
  text-align: center;
  background: #111827;
  color: white;
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .container[data-columns="2"],
  .container[data-columns="3"],
  .container[data-columns="4"],
  .row[data-columns="2"],
  .row[data-columns="3"],
  .row[data-columns="4"] {
    grid-template-columns: 1fr;
  }

  [data-tablet-columns="1"] {
    grid-template-columns: repeat(
      1,
      minmax(0, 1fr)
    ) !important;
  }

  [data-tablet-columns="2"] {
    grid-template-columns: repeat(
      2,
      minmax(0, 1fr)
    ) !important;
  }

  [data-tablet-columns="3"] {
    grid-template-columns: repeat(
      3,
      minmax(0, 1fr)
    ) !important;
  }

  [data-tablet-columns="4"] {
    grid-template-columns: repeat(
      4,
      minmax(0, 1fr)
    ) !important;
  }

  .hero {
    padding: 70px 20px;
  }

  .hero h1 {
    font-size: 36px;
  }

  .navbar-preview {
    flex-direction: column;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  [data-mobile-columns="1"] {
    grid-template-columns: repeat(
      1,
      minmax(0, 1fr)
    ) !important;
  }

  [data-mobile-columns="2"] {
    grid-template-columns: repeat(
      2,
      minmax(0, 1fr)
    ) !important;
  }

  [data-mobile-columns="3"] {
    grid-template-columns: repeat(
      3,
      minmax(0, 1fr)
    ) !important;
  }

  [data-mobile-columns="4"] {
    grid-template-columns: repeat(
      4,
      minmax(0, 1fr)
    ) !important;
  }

  .hero {
    padding: 50px 15px;
  }

  .hero h1 {
    font-size: 30px;
  }

  .section {
    padding: 50px 15px;
  }

  .container {
    padding: 15px;
  }

  .card {
    padding: 15px;
  }
}`;
}