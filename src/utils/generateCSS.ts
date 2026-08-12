export function generateCSS() {
  return `*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:Arial,Helvetica,sans-serif;
}

.navbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px;
  background:#ffffff;
}

.hero{
  padding:100px 20px;
  text-align:center;
}

.hero h1{
  font-size:48px;
  margin-bottom:20px;
}

.hero p{
  margin-bottom:20px;
}

.hero button{
  padding:12px 24px;
  border:none;
  border-radius:8px;
  cursor:pointer;
}

.section{
  padding:80px 20px;
}

.card{
  padding:20px;
  border:1px solid #ddd;
  border-radius:12px;
}

.footer{
  padding:40px;
  text-align:center;
  background:#111827;
  color:white;
}`;
}