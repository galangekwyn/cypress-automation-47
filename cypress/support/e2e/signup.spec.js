describe("Sign Up", () => {
    it("Melakukan Pendaftaran", () => {
      // Buka halaman login
      cy.visit("https://kasirdemo.belajarqa.com/login");
  
      // Klik tombol "Daftar" atau elemen yang sesuai
      cy.contains("Daftar").click();
  
      // Masukkan informasi pendaftaran
      cy.get('[name="username"]').type("galangekw");
      cy.get('[name="email"]').type("galangekw@gmail.com");
      cy.get('[name="password"]').type("123");
  
      // Klik tombol pendaftaran
      cy.get('button[type="submit"]').click();
  
      // Verifikasi bahwa pendaftaran berhasil
      cy.contains("Pendaftaran berhasil").should("be.visible");
    });
  });
  