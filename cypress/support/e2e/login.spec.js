// cypress/integration/login.spec.js

describe("Login", () => {
    it("Melakukan Login", () => {
      // Buka halaman login
      cy.visit("https://kasirdemo.belajarqa.com/login");
  
      // Masukkan kredensial login
      cy.get('[name="username"]').type("your_username");
      cy.get('[name="password"]').type("your_password");
  
      // Klik tombol login
      cy.get('button[type="submit"]').click();
  
      // Verifikasi bahwa login berhasil
      cy.contains("Dashboard").should("be.visible");
    });
  });
  