import { Component, inject } from "@angular/core";
// import * as XLSX from "xlsx";
// import { jsPDF } from "jspdf";
import { PdfService } from "../../services/pdf.service";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"],
})
export class ReportComponent {
  providers = [
    {
      service_provider_name: "Name 1",
      service_provider_profile_url: "https://picsum.photos/200",
      contract_name: "Contract Name 1",
      man_hours: 119,
      worked_overtime: false,
      active_days_count: "5",
      color_theme: "neutral",
    },
    {
      service_provider_name: "Name 2",
      service_provider_profile_url: null,
      contract_name: "Contract Name 2",
      man_hours: 0,
      worked_overtime: false,
      active_days_count: "3",
      color_theme: "neutral",
    },
    {
      service_provider_name: "Name 3",
      service_provider_profile_url: "https://picsum.photos/200",
      contract_name: "Contract Name 3",
      active_days_count: "0",
      man_hours: 119,
      worked_overtime: true,
      color_theme: "critical",
    },
    {
      service_provider_name: "Name 1",
      service_provider_profile_url: "https://picsum.photos/200",
      contract_name: "Contract Name 1",
      man_hours: 119,
      worked_overtime: false,
      active_days_count: "5",
      color_theme: "neutral",
    },
    {
      service_provider_name: "Name 2",
      service_provider_profile_url: null,
      contract_name: "Contract Name 2",
      man_hours: 0,
      worked_overtime: false,
      active_days_count: "3",
      color_theme: "neutral",
    },
    {
      service_provider_name: "Name 3",
      service_provider_profile_url: "https://picsum.photos/200",
      contract_name: "Contract Name 3",
      active_days_count: "0",
      man_hours: 119,
      worked_overtime: true,
      color_theme: "critical",
    },
    {
      service_provider_name: "Name 1",
      service_provider_profile_url: "https://picsum.photos/200",
      contract_name: "Contract Name 1",
      man_hours: 119,
      worked_overtime: false,
      active_days_count: "5",
      color_theme: "neutral",
    },
    {
      service_provider_name: "Name 2",
      service_provider_profile_url: null,
      contract_name: "Contract Name 2",
      man_hours: 0,
      worked_overtime: false,
      active_days_count: "3",
      color_theme: "neutral",
    },
    {
      service_provider_name: "Name 3",
      service_provider_profile_url: "https://picsum.photos/200",
      contract_name: "Contract Name 3",
      active_days_count: "0",
      man_hours: 119,
      worked_overtime: true,
      color_theme: "critical",
    },
    {
      service_provider_name: "Name 1",
      service_provider_profile_url: "https://picsum.photos/200",
      contract_name: "Contract Name 1",
      man_hours: 119,
      worked_overtime: false,
      active_days_count: "5",
      color_theme: "neutral",
    },
    {
      service_provider_name: "Name 2",
      service_provider_profile_url: null,
      contract_name: "Contract Name 2",
      man_hours: 0,
      worked_overtime: false,
      active_days_count: "3",
      color_theme: "neutral",
    },
    {
      service_provider_name: "Name 3",
      service_provider_profile_url: "https://picsum.photos/200",
      contract_name: "Contract Name 3",
      active_days_count: "0",
      man_hours: 119,
      worked_overtime: true,
      color_theme: "critical",
    },
    {
      service_provider_name: "Name 1",
      service_provider_profile_url: "https://picsum.photos/200",
      contract_name: "Contract Name 1",
      man_hours: 119,
      worked_overtime: false,
      active_days_count: "5",
      color_theme: "neutral",
    },
    {
      service_provider_name: "Name 2",
      service_provider_profile_url: null,
      contract_name: "Contract Name 2",
      man_hours: 0,
      worked_overtime: false,
      active_days_count: "3",
      color_theme: "neutral",
    },
    {
      service_provider_name: "Name 3",
      service_provider_profile_url: "https://picsum.photos/200",
      contract_name: "Contract Name 3",
      active_days_count: "0",
      man_hours: 119,
      worked_overtime: true,
      color_theme: "critical",
    },
    {
      service_provider_name: "Name 1",
      service_provider_profile_url: "https://picsum.photos/200",
      contract_name: "Contract Name 1",
      man_hours: 119,
      worked_overtime: false,
      active_days_count: "5",
      color_theme: "neutral",
    },
    {
      service_provider_name: "Name 2",
      service_provider_profile_url: null,
      contract_name: "Contract Name 2",
      man_hours: 0,
      worked_overtime: false,
      active_days_count: "3",
      color_theme: "neutral",
    },
    {
      service_provider_name: "Name 3",
      service_provider_profile_url: "https://picsum.photos/200",
      contract_name: "Contract Name 3",
      active_days_count: "0",
      man_hours: 119,
      worked_overtime: true,
      color_theme: "critical",
    },
    {
      service_provider_name: "Name 1",
      service_provider_profile_url: "https://picsum.photos/200",
      contract_name: "Contract Name 1",
      man_hours: 119,
      worked_overtime: false,
      active_days_count: "5",
      color_theme: "neutral",
    },
    {
      service_provider_name: "Name 2",
      service_provider_profile_url: null,
      contract_name: "Contract Name 2",
      man_hours: 0,
      worked_overtime: false,
      active_days_count: "3",
      color_theme: "neutral",
    },
    {
      service_provider_name: "Name 3",
      service_provider_profile_url: "https://picsum.photos/200",
      contract_name: "Contract Name 3",
      active_days_count: "0",
      man_hours: 119,
      worked_overtime: true,
      color_theme: "critical",
    },
  ];
  private pdfService: PdfService = inject(PdfService);

  // reportData = {
  //   title: 'Sales Report',
  //   date: '2025-01-18',
  //   items: [
  //     { id: 1, name: 'Product A', quantity: 10, price: 50 },
  //     { id: 2, name: 'Product B', quantity: 5, price: 30 },
  //     { id: 3, name: 'Product C', quantity: 8, price: 70 },
  //   ],
  // };

  // reportGenerated = false;

  downloadProviders(): void {
    this.pdfService.generateProvidersPDF(this.providers);
  }

  // generateReport() {
  //   this.reportGenerated = true;
  // }

  // downloadPDF() {
  //   const doc = new jsPDF();
  //   doc.setFontSize(18);
  //   doc.text(this.reportData.title, 10, 10);
  //   doc.setFontSize(12);
  //   doc.text(`Date: ${this.reportData.date}`, 10, 20);

  //   doc.setFont('helvetica', 'bold');
  //   let y = 30;
  //   doc.text('ID', 10, y);
  //   doc.text('Name', 30, y);
  //   doc.text('Quantity', 80, y);
  //   doc.text('Price', 110, y);
  //   doc.text('Total', 140, y);

  //   doc.setFont('helvetica', 'normal');
  //   y += 10;
  //   this.reportData.items.forEach((item) => {
  //     doc.text(item.id.toString(), 10, y);
  //     doc.text(item.name, 30, y);
  //     doc.text(item.quantity.toString(), 80, y);
  //     doc.text(item.price.toString(), 110, y);
  //     doc.text((item.quantity * item.price).toString(), 140, y);
  //     y += 10;
  //   });

  //   doc.save('report.pdf');
  // }

  // downloadExcel() {
  //   const worksheet = XLSX.utils.json_to_sheet(this.reportData.items);
  //   const workbook = XLSX.utils.book_new();

  //   // Add title and date as additional rows
  //   XLSX.utils.sheet_add_aoa(
  //     worksheet,
  //     [[this.reportData.title], [`Date: ${this.reportData.date}`]],
  //     { origin: 'A1' }
  //   );
  //   XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');

  //   XLSX.writeFile(workbook, 'report.xlsx');
  // }
}
