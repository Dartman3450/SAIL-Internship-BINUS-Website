function loadPage(page) {
  const content = document.getElementById("content");

  if (page === "produksi") {
    content.innerHTML = `
      <h1>Data Entry Produksi</h1>
      <p>Isi data produksi di sini</p>
    `;
  }
  else if (page === "utility") {
    content.innerHTML = `
      <h1>Data Entry Utility</h1>
      <p>Isi data utility di sini</p>
    `;
  }
  else if (page === "lab") {
    content.innerHTML = `
      <h1>Data Entry Laboratorium</h1>
      <p>Isi data lab di sini</p>
    `;
  }
  else if (page === "limbah") {
    content.innerHTML = `
      <h1>Data Entry Limbah</h1>
      <p>Isi data limbah di sini</p>
    `;
  }
  else if (page === "Service") {
    content.innerHTML = `
      <h1>Service</h1>
      <p>Contanct us whatsapp : 081----------- </p>
	  <p>Email: Siliwangi.agro@gmail.com</p>
    `;
  }
  else if(page === "Reporting"){
	  <h1>Daily Report (Login)</h1>
	  <p>Log contain login and logout per date (WIP)</p>
	  ;
  }
  else if(page === "Help_&_Support){
	  <h1>Help & Support operation!</h1>
	  <p>Waiting consultation about the content (WIP)</p>
  }
  else if (page === "setting") {
    content.innerHTML = `
      <h1>Setting</h1>
      <p>Pengaturan sistem</p>
    `;
  }
}