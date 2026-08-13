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

button,
input,
select,
textarea {
  font: inherit;
}

a {
  color: inherit;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 0;
  min-height: 72px;
  padding: 0 20px;
  background: #ffffff;
  color: #172033;
  border: 1px solid #e4e7ef;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.navbar .logo {
  flex-shrink: 0;
  min-width: 0;
  color: inherit;
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.navbar .nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  min-width: 0;
  max-width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}

.navbar .nav-links li {
  min-width: 0;
  list-style: none;
}

.navbar .nav-links a {
  display: inline-block;
  color: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  text-decoration: none;
  white-space: nowrap;
  opacity: 0.8;
  transition:
    opacity 0.15s ease,
    color 0.15s ease;
}

.navbar .nav-links a:hover {
  opacity: 1;
}

.navbar .navbar-cta,
.navbar > button {
  flex-shrink: 0;
  padding: 9px 15px;
  border: none;
  border-radius: 8px;
  background: #7c3aed;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.15s ease,
    transform 0.15s ease;
}

.navbar .navbar-cta:hover,
.navbar > button:hover {
  background: #6d28d9;
}

.navbar .navbar-cta:active,
.navbar > button:active {
  transform: translateY(1px);
}

.navbar[style*="position: sticky"] {
  position: sticky;
  top: 0;
  z-index: 100;
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
  background: #7c3aed;
  color: #ffffff;
  cursor: pointer;
  transition:
    background 0.15s ease,
    transform 0.15s ease;
}

.hero button:hover {
  background: #6d28d9;
}

.hero button:active {
  transform: translateY(1px);
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
  background: #7c3aed;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 20px;
  transition:
    background 0.15s ease,
    transform 0.15s ease;
}

.custom-button:hover {
  background: #6d28d9;
}

.custom-button:active {
  transform: translateY(1px);
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
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #ffffff;
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

@media (max-width: 900px) {
  .navbar {
    gap: 15px;
    padding: 0 16px;
  }

  .navbar .nav-links {
    gap: 16px;
  }

  .navbar .navbar-cta,
  .navbar > button {
    display: none;
  }
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

  .navbar {
    min-height: 64px;
  }

  .navbar .nav-links {
    gap: 12px;
  }

  .navbar .nav-links a {
    font-size: 13px;
  }
}

@media (max-width: 600px) {
  .navbar {
    justify-content: center;
  }

  .navbar .logo {
    display: none;
  }

  .navbar .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 8px;
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

  .navbar {
    min-height: 58px;
    padding: 0 12px;
    border-radius: 8px;
  }

  .navbar .nav-links {
    gap: 10px;
  }

  .navbar .nav-links a {
    font-size: 12px;
  }
}`;
}