export function generateCSS() {
  return `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  margin-bottom: 20px;
}

.paragraph {
  line-height: 1.6;
  margin-bottom: 20px;
}

.custom-button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
}

.section {
  padding: 80px 20px;
}

.card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
}

.container {
  padding: 20px;
  border: 2px dashed #94a3b8;
  border-radius: 10px;
  margin-bottom: 20px;
}

.image-container {
  width: 100%;
  margin-bottom: 20px;
}

.image {
  width: 100%;
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
  padding: 40px;
  text-align: center;
  background: #111827;
  color: white;
}`;
}