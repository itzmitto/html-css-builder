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

img {
  max-width: 100%;
}

.navbar {
  width: 100%;
  min-width: 0;
  min-height: 72px;
  box-sizing: border-box;
  overflow: hidden;
}

.navbar-inner {
  width: 100%;
  min-width: 0;
  min-height: inherit;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  box-sizing: border-box;
}

.logo {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 0;
  color: inherit;
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.02em;
  text-decoration: none;
  white-space: nowrap;
}

.nav-links {
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

.nav-links li {
  min-width: 0;
  list-style: none;
}

.nav-links a {
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
    transform 0.15s ease;
}

.nav-links a:hover {
  opacity: 1;
  transform: translateY(-1px);
}

.navbar-cta {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 9px 15px;
  border: none;
  border-radius: 8px;
  background: #7c3aed;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.15s ease,
    transform 0.15s ease,
    box-shadow 0.15s ease;
}

.navbar-cta:hover {
  background: #6d28d9;
  box-shadow: 0 8px 18px rgba(124, 58, 237, 0.18);
}

.navbar-cta:active {
  transform: translateY(1px);
}

.navbar[style*="position: sticky"] {
  position: sticky;
  top: 0;
  z-index: 100;
}

.hero {
  width: 100%;
  min-width: 0;
  min-height: 260px;
  padding: var(--hero-padding-y, 80px) 40px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero[data-text-align="left"] {
  justify-content: flex-start;
}

.hero[data-text-align="right"] {
  justify-content: flex-end;
}

.hero-content {
  width: 100%;
  max-width: var(--hero-content-width, 900px);
  min-width: 0;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.hero[data-text-align="left"] .hero-content {
  align-items: flex-start;
}

.hero[data-text-align="right"] .hero-content {
  align-items: flex-end;
}

.hero-badge,
.section-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.1);
  color: #7c3aed;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero h1 {
  width: 100%;
  max-width: 850px;
  margin: 18px 0 0;
  color: inherit;
  font-size: clamp(38px, 6vw, 68px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
  overflow-wrap: break-word;
}

.hero p {
  width: 100%;
  max-width: 680px;
  margin: 22px 0 0;
  color: inherit;
  font-size: 18px;
  line-height: 1.7;
  opacity: 0.68;
  overflow-wrap: break-word;
}

.hero[data-text-align="left"] .hero p,
.hero[data-text-align="left"] .hero h1 {
  text-align: left;
}

.hero[data-text-align="center"] .hero p,
.hero[data-text-align="center"] .hero h1 {
  text-align: center;
}

.hero[data-text-align="right"] .hero p,
.hero[data-text-align="right"] .hero h1 {
  text-align: right;
}

.hero-actions,
.section-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.hero[data-text-align="left"] .hero-actions,
.section[data-text-align="left"] .section-actions {
  justify-content: flex-start;
}

.hero[data-text-align="right"] .hero-actions,
.section[data-text-align="right"] .section-actions {
  justify-content: flex-end;
}

.hero-primary-button,
.hero-secondary-button,
.section-button,
.card-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background 0.15s ease,
    border-color 0.15s ease;
}

.hero-primary-button {
  min-height: 46px;
  padding: 12px 22px;
  border: 1px solid transparent;
  border-radius: 10px;
  background: #7c3aed;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.22);
}

.hero-primary-button:hover {
  background: #6d28d9;
  transform: translateY(-1px);
  box-shadow: 0 12px 28px rgba(124, 58, 237, 0.28);
}

.hero[data-button-style="outline"] .hero-primary-button {
  border-color: rgba(124, 58, 237, 0.45);
  background: transparent;
  color: #7c3aed;
  box-shadow: none;
}

.hero[data-button-style="outline"] .hero-primary-button:hover {
  background: rgba(124, 58, 237, 0.06);
}

.hero[data-button-style="ghost"] .hero-primary-button {
  border-color: transparent;
  background: rgba(124, 58, 237, 0.08);
  color: #7c3aed;
  box-shadow: none;
}

.hero[data-button-style="ghost"] .hero-primary-button:hover {
  background: rgba(124, 58, 237, 0.14);
}

.hero-secondary-button {
  min-height: 46px;
  padding: 11px 20px;
  border: 1px solid #d8dbe5;
  border-radius: 10px;
  background: #ffffff;
  color: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
}

.hero-secondary-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.1);
}

.hero-decoration,
.section-decoration,
.footer-decoration,
.card-decoration {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.hero-decoration-top {
  width: 260px;
  height: 260px;
  top: -100px;
  right: -80px;
  background: rgba(124, 58, 237, 0.06);
}

.hero-decoration-bottom {
  width: 180px;
  height: 180px;
  bottom: -70px;
  left: -60px;
  border: 1px solid rgba(124, 58, 237, 0.08);
}

.section {
  width: 100%;
  min-width: 0;
  min-height: 360px;
  padding: 80px 40px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
}

.section-content {
  width: 100%;
  max-width: var(--section-content-width, 1100px);
  margin-left: auto;
  margin-right: auto;
  min-width: 0;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
}

.section[data-text-align="center"] .section-content {
  align-items: center;
}

.section[data-text-align="right"] .section-content {
  align-items: flex-end;
}

.section h2 {
  width: 100%;
  max-width: 850px;
  margin: 16px 0 0;
  color: inherit;
  font-size: clamp(30px, 4vw, 48px);
  font-weight: 750;
  line-height: 1.1;
  letter-spacing: -0.035em;
  overflow-wrap: break-word;
}

.section p {
  width: 100%;
  max-width: 720px;
  margin: 18px 0 0;
  color: inherit;
  font-size: 17px;
  line-height: 1.75;
  opacity: 0.68;
  overflow-wrap: break-word;
}

.section[data-text-align="left"] h2,
.section[data-text-align="left"] p {
  text-align: left;
}

.section[data-text-align="center"] h2,
.section[data-text-align="center"] p {
  text-align: center;
}

.section[data-text-align="right"] h2,
.section[data-text-align="right"] p {
  text-align: right;
}

.section-feature {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  background: #f8f7fc;
  border: 1px solid #ece9f4;
  color: inherit;
  font-size: 13px;
  font-weight: 600;
}

.section-feature-dot {
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #7c3aed;
}

.section-button {
  min-height: 42px;
  padding: 10px 18px;
  border: none;
  border-radius: 9px;
  background: #7c3aed;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.18);
}

.section-button:hover {
  background: #6d28d9;
  transform: translateY(-1px);
}

.section-decoration-top {
  width: 300px;
  height: 300px;
  top: -120px;
  right: -80px;
  background: rgba(124, 58, 237, 0.05);
}

.section-decoration-bottom {
  width: 260px;
  height: 260px;
  bottom: -110px;
  left: -90px;
  border: 1px solid rgba(124, 58, 237, 0.07);
}

.card {
  width: 100%;
  min-width: 0;
  min-height: 280px;
  height: 100%;
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #ffffff;
  color: inherit;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

.card-image {
  width: 100%;
  height: 170px;
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f3fa;
}

.card-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.card-topline {
  width: 100%;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.card-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px 9px;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.09);
  color: #7c3aed;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.card-number {
  color: inherit;
  font-size: 11px;
  font-weight: 600;
  opacity: 0.45;
}

.card-content {
  width: 100%;
  min-width: 0;
}

.card-content h3 {
  width: 100%;
  margin: 0;
  color: inherit;
  font-size: 24px;
  font-weight: 750;
  line-height: 1.15;
  letter-spacing: -0.025em;
  overflow-wrap: break-word;
}

.card-content p {
  width: 100%;
  max-width: 520px;
  margin: 12px 0 0;
  color: inherit;
  font-size: 14px;
  line-height: 1.7;
  opacity: 0.62;
  overflow-wrap: break-word;
}

.card-tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
}

.card-tags span {
  padding: 7px 10px;
  border-radius: 8px;
  background: #f7f5fb;
  border: 1px solid #ece9f4;
  color: inherit;
  font-size: 11px;
  font-weight: 600;
}

.card-actions {
  width: 100%;
  margin-top: auto;
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.card-learn-more {
  color: inherit;
  font-size: 12px;
  font-weight: 600;
  opacity: 0.48;
}

.card-button {
  min-height: 40px;
  padding: 9px 15px;
  border: 1px solid #e5e1ee;
  border-radius: 9px;
  background: #ffffff;
  color: inherit;
  font-size: 12px;
  font-weight: 700;
}

.card-button:hover {
  transform: translateY(-1px);
  border-color: #d9d2e8;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);
}

.card-decoration {
  width: 160px;
  height: 160px;
  top: -70px;
  right: -70px;
  background: rgba(124, 58, 237, 0.045);
}

.heading {
  width: 100%;
  min-width: 0;
  margin-bottom: 20px;
  overflow-wrap: break-word;
}

.paragraph {
  width: 100%;
  min-width: 0;
  line-height: 1.6;
  margin-bottom: 20px;
  overflow-wrap: break-word;
}

.custom-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 42px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: #7c3aed;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 20px;
  text-decoration: none;
  transition:
    background 0.15s ease,
    transform 0.15s ease,
    box-shadow 0.15s ease;
}

.custom-button:hover {
  background: #6d28d9;
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(124, 58, 237, 0.18);
}

.custom-button:active {
  transform: translateY(1px);
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

.container[data-columns="5"],
.row[data-columns="5"] {
  grid-template-columns: repeat(
    5,
    minmax(0, 1fr)
  );
}

.container[data-columns="6"],
.row[data-columns="6"] {
  grid-template-columns: repeat(
    6,
    minmax(0, 1fr)
  );
}

.container[data-columns="7"],
.row[data-columns="7"] {
  grid-template-columns: repeat(
    7,
    minmax(0, 1fr)
  );
}

.container[data-columns="8"],
.row[data-columns="8"] {
  grid-template-columns: repeat(
    8,
    minmax(0, 1fr)
  );
}

.container[data-columns="9"],
.row[data-columns="9"] {
  grid-template-columns: repeat(
    9,
    minmax(0, 1fr)
  );
}

.container[data-columns="10"],
.row[data-columns="10"] {
  grid-template-columns: repeat(
    10,
    minmax(0, 1fr)
  );
}

.container[data-columns="11"],
.row[data-columns="11"] {
  grid-template-columns: repeat(
    11,
    minmax(0, 1fr)
  );
}

.container[data-columns="12"],
.row[data-columns="12"] {
  grid-template-columns: repeat(
    12,
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
  min-height: 360px;
  padding: 56px 40px 24px;
  background: #111827;
  color: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.footer-content {
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
}

.footer-grid {
  display: grid;
  grid-template-columns:
    minmax(220px, 1.5fr)
    repeat(3, minmax(120px, 1fr))
    minmax(220px, 1.25fr);
  gap: 34px;
  align-items: start;
}

.footer-brand {
  min-width: 0;
}

.footer-brand-title {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: inherit;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.footer-brand-icon {
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 9px;
  background: #7c3aed;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
}

.footer-brand p {
  max-width: 300px;
  margin-top: 15px;
  color: rgba(255,255,255,0.62);
  font-size: 13px;
  line-height: 1.7;
}

.footer-socials {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
}

.footer-socials a {
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 9px;
  background: rgba(255,255,255,0.05);
  color: inherit;
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
  transition:
    background 0.15s ease,
    transform 0.15s ease;
}

.footer-socials a:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-1px);
}

.footer-column h4,
.footer-newsletter h4 {
  margin: 0 0 13px;
  color: inherit;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.footer-column a {
  display: block;
  margin-bottom: 9px;
  color: rgba(255,255,255,0.62);
  font-size: 13px;
  line-height: 1.4;
  text-decoration: none;
  transition:
    color 0.15s ease,
    transform 0.15s ease;
}

.footer-column a:hover {
  color: #ffffff;
  transform: translateX(2px);
}

.footer-newsletter {
  min-width: 0;
}

.footer-newsletter h4 {
  margin-bottom: 10px;
  font-size: 15px;
  text-transform: none;
  letter-spacing: normal;
}

.footer-newsletter p {
  margin: 0;
  color: rgba(255,255,255,0.62);
  font-size: 12px;
  line-height: 1.6;
}

.footer-newsletter-form {
  display: flex;
  width: 100%;
  margin-top: 14px;
  gap: 7px;
}

.footer-newsletter-form input {
  flex: 1;
  min-width: 0;
  height: 40px;
  padding: 0 11px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  outline: none;
  background: rgba(255,255,255,0.06);
  color: #ffffff;
  font-size: 12px;
  box-sizing: border-box;
}

.footer-newsletter-form input::placeholder {
  color: rgba(255,255,255,0.42);
}

.footer-newsletter-form button {
  flex-shrink: 0;
  height: 40px;
  padding: 0 13px;
  border: none;
  border-radius: 8px;
  background: #ffffff;
  color: #111827;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.15s ease,
    transform 0.15s ease;
}

.footer-newsletter-form button:hover {
  background: #f3f4f6;
  transform: translateY(-1px);
}

.footer-divider {
  width: 100%;
  height: 1px;
  margin-top: 42px;
  margin-bottom: 18px;
  background: rgba(255,255,255,0.10);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  color: rgba(255,255,255,0.62);
  font-size: 11px;
}

.footer-legal {
  display: flex;
  align-items: center;
  gap: 16px;
}

.footer-legal a {
  color: inherit;
  text-decoration: none;
  transition: color 0.15s ease;
}

.footer-legal a:hover {
  color: #ffffff;
}

.footer-decoration {
  width: 320px;
  height: 320px;
  position: absolute;
  right: -150px;
  bottom: -170px;
  border-radius: 50%;
  background: rgba(255,255,255,0.035);
  pointer-events: none;
}

@media (max-width: 1100px) {
  .footer-grid {
    grid-template-columns:
      minmax(220px, 1.5fr)
      repeat(3, minmax(110px, 1fr));
  }

  .footer-newsletter {
    grid-column: 1 / -1;
  }
}

@media (max-width: 900px) {
  .navbar-inner {
    gap: 15px;
    padding: 0 16px;
  }

  .nav-links {
    gap: 16px;
  }

  .navbar-cta {
    display: none;
  }

  .footer-grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
    gap: 28px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .container[data-columns="2"],
  .container[data-columns="3"],
  .container[data-columns="4"],
  .container[data-columns="5"],
  .container[data-columns="6"],
  .container[data-columns="7"],
  .container[data-columns="8"],
  .container[data-columns="9"],
  .container[data-columns="10"],
  .container[data-columns="11"],
  .container[data-columns="12"],
  .row[data-columns="2"],
  .row[data-columns="3"],
  .row[data-columns="4"],
  .row[data-columns="5"],
  .row[data-columns="6"],
  .row[data-columns="7"],
  .row[data-columns="8"],
  .row[data-columns="9"],
  .row[data-columns="10"],
  .row[data-columns="11"],
  .row[data-columns="12"] {
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

  [data-tablet-columns="5"] {
    grid-template-columns: repeat(
      5,
      minmax(0, 1fr)
    ) !important;
  }

  [data-tablet-columns="6"] {
    grid-template-columns: repeat(
      6,
      minmax(0, 1fr)
    ) !important;
  }

  [data-tablet-columns="7"] {
    grid-template-columns: repeat(
      7,
      minmax(0, 1fr)
    ) !important;
  }

  [data-tablet-columns="8"] {
    grid-template-columns: repeat(
      8,
      minmax(0, 1fr)
    ) !important;
  }

  [data-tablet-columns="9"] {
    grid-template-columns: repeat(
      9,
      minmax(0, 1fr)
    ) !important;
  }

  [data-tablet-columns="10"] {
    grid-template-columns: repeat(
      10,
      minmax(0, 1fr)
    ) !important;
  }

  [data-tablet-columns="11"] {
    grid-template-columns: repeat(
      11,
      minmax(0, 1fr)
    ) !important;
  }

  [data-tablet-columns="12"] {
    grid-template-columns: repeat(
      12,
      minmax(0, 1fr)
    ) !important;
  }

  .hero {
    padding-left: 20px;
    padding-right: 20px;
  }

  .section {
    padding-left: 20px;
    padding-right: 20px;
  }

  .hero h1 {
    font-size: clamp(34px, 8vw, 54px);
  }

  .navbar {
    min-height: 64px;
  }

  .nav-links {
    gap: 12px;
  }

  .nav-links a {
    font-size: 13px;
  }

  .footer {
    padding: 46px 24px 22px;
  }
}

@media (max-width: 600px) {
  .navbar-inner {
    justify-content: center;
  }

  .navbar .logo {
    display: none;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 8px;
  }

  .hero {
    padding-left: 15px;
    padding-right: 15px;
  }

  .section {
    padding-left: 15px;
    padding-right: 15px;
  }

  .hero-actions,
  .section-actions {
    width: 100%;
  }

  .hero-primary-button,
  .hero-secondary-button,
  .section-button {
    width: 100%;
  }

  .card-actions {
    align-items: stretch;
  }

  .card-button {
    width: 100%;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-brand {
    grid-column: auto;
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

  [data-mobile-columns="5"] {
    grid-template-columns: repeat(
      5,
      minmax(0, 1fr)
    ) !important;
  }

  [data-mobile-columns="6"] {
    grid-template-columns: repeat(
      6,
      minmax(0, 1fr)
    ) !important;
  }

  [data-mobile-columns="7"] {
    grid-template-columns: repeat(
      7,
      minmax(0, 1fr)
    ) !important;
  }

  [data-mobile-columns="8"] {
    grid-template-columns: repeat(
      8,
      minmax(0, 1fr)
    ) !important;
  }

  [data-mobile-columns="9"] {
    grid-template-columns: repeat(
      9,
      minmax(0, 1fr)
    ) !important;
  }

  [data-mobile-columns="10"] {
    grid-template-columns: repeat(
      10,
      minmax(0, 1fr)
    ) !important;
  }

  [data-mobile-columns="11"] {
    grid-template-columns: repeat(
      11,
      minmax(0, 1fr)
    ) !important;
  }

  [data-mobile-columns="12"] {
    grid-template-columns: repeat(
      12,
      minmax(0, 1fr)
    ) !important;
  }

  .hero {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .hero h1 {
    font-size: 30px;
  }

  .hero p {
    font-size: 16px;
  }

  .section {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .section h2 {
    font-size: 30px;
  }

  .section p {
    font-size: 15px;
  }

  .container {
    padding: 15px;
  }

  .card {
    padding: 15px;
  }

  .card-image {
    height: 150px;
  }

  .navbar {
    min-height: 58px;
    padding: 0 12px;
    border-radius: 8px;
  }

  .nav-links {
    gap: 10px;
  }

  .nav-links a {
    font-size: 12px;
  }

  .footer {
    padding: 38px 16px 20px;
  }
}`;
}