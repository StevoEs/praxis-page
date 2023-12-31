// forward-calculation.component.ts
import { Component, NgModule } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-forward-calculation',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './Kalkulation .html',
})
export class ForwardCalculationComponent {
  // Die Eingabewerte für die Kalkulation
  listPrice: number = 10000; // Listenverkaufspreis
  deliveryDiscount: number = 8; // Lieferabatt in Prozent
  deliveryCashDiscount: number = 2; // Lieferskonto in Prozent
  incidentalCosts: number = 30; // Bezugskosten
  handlingCosts: number = 20; // Handlungskosten in Prozent
  profit: number = 8; // Gewinn in Prozent
  customerCashDiscount: number = 3; // Kundenkonto in Prozent
  agentCommission: number = 6; // Vertreterprovision in Prozent
  customerDiscount: number = 5; // Kundenrabatt in Prozent

  // Die berechneten Werte für die Kalkulation
  targetPurchasePrice: number = 0; // Zieleinkaufspreis
  cashPurchasePrice: number = 0; // Bareinkaufspreis
  referencePrice: number = 0; // Bezugspreis
  costPrice: number = 0; // Selbstkosten
  cashSalesPrice: number = 0; // Barverkaufspreis
  targetSalesPrice: number = 0; // Zielverkaufspreis
  listPricePerPiece: number = 0; // Listenverkaufspreis/Stück

  // Diese Methode wird aufgerufen, wenn sich ein Eingabewert ändert
  calculate() {
    // Berechnen Sie die Werte mit den Formeln aus dem Kalkulationsschema
    this.targetPurchasePrice =
      this.listPrice * (1 - this.deliveryDiscount / 100); // Listenverkaufspreis * (1 - Lieferabatt / 100)
    this.cashPurchasePrice =
      this.targetPurchasePrice * (1 - this.deliveryCashDiscount / 100); // Zieleinkaufspreis * (1 - Lieferskonto / 100)
    this.referencePrice = this.cashPurchasePrice + this.incidentalCosts; // Bareinkaufspreis + Bezugskosten
    this.costPrice =
      this.referencePrice * (1 + this.handlingCosts / 100); // Bezugspreis * (1 + Handlungskosten / 100)
    this.cashSalesPrice = this.costPrice * (1 + this.profit / 100); // Selbstkosten * (1 + Gewinn / 100)
    this.targetSalesPrice =
      this.cashSalesPrice * (1 + this.customerCashDiscount / 100); // Barverkaufspreis * (1 + Kundenkonto / 100)
    this.targetSalesPrice +=
      this.targetSalesPrice * (this.agentCommission / 100); // Zielverkaufspreis + Zielverkaufspreis * (Vertreterprovision / 100)
    this.listPricePerPiece =
      this.targetSalesPrice * (1 - this.customerDiscount / 100); // Zielverkaufspreis * (1 - Kundenrabatt / 100)

    // Runden Sie die Werte auf zwei Nachkommastellen
    this.targetPurchasePrice = Math.round(this.targetPurchasePrice * 100) / 100;
    this.cashPurchasePrice = Math.round(this.cashPurchasePrice * 100) / 100;
    this.referencePrice = Math.round(this.referencePrice * 100) / 100;
    this.costPrice = Math.round(this.costPrice * 100) / 100;
    this.cashSalesPrice = Math.round(this.cashSalesPrice * 100) / 100;
    this.targetSalesPrice = Math.round(this.targetSalesPrice * 100) / 100;
    this.listPricePerPiece = Math.round(this.listPricePerPiece * 100) / 100;
  }

 //@NgModule({
   // imports: [FormsModule, NgForm,],
    // other module configuration
  //})
}
