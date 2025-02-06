import { Injectable } from "@angular/core";
import jsPDF from "jspdf";

interface ServiceProvider {
  service_provider_name?: string;
  contract_name?: string;
  active_days_count?: string;
  totalDays?: number;
  man_hours?: number;
  worked_overtime?: boolean;
  service_provider_profile_url?: string | null;
  color_theme?: string;
}

@Injectable({
  providedIn: "root",
})
export class PdfService {
  generateProvidersPDF(
    providers: ServiceProvider[],
    filename: string = `Document-${new Date().toISOString()}.pdf`
  ) {
    const doc = new jsPDF();
    let yPosition = 20;
    const pageHeight = doc.internal.pageSize.height;

    // Function to add header
    const addHeader = () => {
      // Header background
      doc.setFillColor(229, 233, 235);
      doc.rect(15, 20 - 10, 180, 15, "F");

      // Header text
      doc.setFontSize(14);
      doc.setTextColor(100);
      doc.text("Service Provider", 20, 20);
      doc.text("Active Days", 100, 20);
      doc.text("Man Hours", 160, 20);
    };

    // // Header background
    // doc.setFillColor(229, 233, 235);
    // doc.rect(15, yPosition - 10, 180, 15, "F");

    // // Header
    // doc.setFontSize(14);
    // doc.setTextColor(100);
    // doc.setFillColor(229, 233, 235);
    // doc.text("Service Provider", 20, yPosition);
    // doc.text("Active Days", 100, yPosition);
    // doc.text("Man Hours", 160, yPosition);

    // Add header to first page
    addHeader();
    yPosition += 20;

    providers.forEach((provider, index) => {
      // Background for odd rows (optional)
      if (index % 2 !== 0) {
        doc.setFillColor(252, 235, 235);
        doc.rect(15, yPosition - 10, 180, 25, "F");
      }

      // Provider Name
      doc.setFontSize(16);
      doc.setTextColor(0);
      doc.setFont("helvetica", "bold");
      doc.text(provider.service_provider_name!, 40, yPosition + 2);

      // Contract Name
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(0, 0, 238);
      doc.text(provider.contract_name!, 40, yPosition + 9);

      // Active Days
      doc.setFontSize(24);
      doc.setTextColor(0);
      doc.setFont("helvetica", "bold");
      doc.text(provider.active_days_count!.toString(), 100, yPosition + 5.5);

      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(`out of 6`, 115, yPosition + 5);

      // Man Hours
      doc.setFontSize(24);
      doc.setFont("helvetica", "bold");
      if (provider.man_hours?.toString()! && provider.man_hours! > 0) {
        doc.text(`${provider.man_hours?.toString()!}+`, 160, yPosition + 5);
      } else {
        doc.text(provider.man_hours?.toString()!, 160, yPosition + 5);
      }

      doc.setFontSize(12);
      if (provider.worked_overtime && provider.man_hours! > 0) {
        doc.text("OT", 180, yPosition + 5);
      } else {
        doc.text("", 175, yPosition + 5);
      }

      // Add image placeholder (if needed)
      if (provider.service_provider_profile_url) {
        // Create a circular mask
        // doc.saveGraphicsState();
        // doc.setFillColor(255, 255, 255);
        // doc.circle(27.5, yPosition + 4, 7.5, "F");
        // doc.clip();

        // Add the image
        doc.addImage(
          provider.service_provider_profile_url,
          "PNG",
          20,
          yPosition - 3, // Adjusted y position to match circle position
          15,
          15
        );

        // Restore graphics state
        // doc.restoreGraphicsState();

        // Optional: Add circle border
        // doc.circle(27.5, yPosition + 4, 7.5, "S"); // 'S' for stroke (outline)
      } else {
        // Draw gray circle
        doc.setFillColor(200, 200, 200);
        doc.circle(27.5, yPosition + 3, 7.5, "F");

        // Add letter in the circle
        doc.setTextColor(100, 100, 100); // darker gray for text
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        // Center the first letter of the name in the circle
        const letter = provider.contract_name!.charAt(0);
        doc.text(letter, 26, yPosition + 4.5);
      }

      yPosition += 30;

      // Check if we need a new page
      if (yPosition > pageHeight - 30) {
        doc.addPage();
        yPosition = 20;
        addHeader();
        yPosition += 20;
      }
    });

    doc.save(filename);
  }
}
