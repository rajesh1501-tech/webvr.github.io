import React, { useEffect, useRef } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'; // Import StandardFonts from pdf-lib
import { saveAs } from 'file-saver';

// Function to map certificate type to template URL or path
const getTemplatePath = (certificateType) => {
  switch (certificateType) {
    case 'Welding':
      return '/Certificates/Welding.pdf';
    case 'Carpentry':
      return '/certificates/Carpentry.pdf';
    case 'Green Farming':
      return '/Certificates/Green Farming.pdf';
    case 'Healthcare':
      return '/Certificates/Healthcare.pdf';
    default:
      return ''; // You can set a default template or return an error message
  }
};

const CertificateDownload = ({ name, certificateType }) => {
  const downloadTriggeredRef = useRef(false); // Track if download was triggered

  useEffect(() => {
    // Prevent duplicate downloads
    if (downloadTriggeredRef.current) return;

    // Validate inputs before proceeding
    if (!name || !certificateType) {
      console.error('Name or certificate type is missing.');
      return;
    }

    const generateCertificate = async () => {
      // Mark the download as triggered immediately to prevent duplicates
      downloadTriggeredRef.current = true;

      // Get the template path based on the certificate type
      const templatePath = getTemplatePath(certificateType);
      if (!templatePath) {
        console.error('No valid template found for certificate type:', certificateType);
        downloadTriggeredRef.current = false; // Allow retry if there's an error
        return;
      }

      try {
        // Fetch the template PDF
        const existingPdfBytes = await fetch(templatePath)
          .then((res) => res.arrayBuffer())
          .catch((err) => {
            console.error('Error fetching PDF template:', err);
            downloadTriggeredRef.current = false; // Allow retry if there's an error
            return null;
          });

        if (!existingPdfBytes) {
          console.error('Failed to fetch the template PDF');
          downloadTriggeredRef.current = false; // Allow retry if there's an error
          return;
        }

        // Load the existing PDF template
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const firstPage = pdfDoc.getPages()[0];
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

        // Position for the name text
        const x = 300;
        const y = 310;
        const fontSize = 24;

        // Draw the name on the certificate template
        firstPage.drawText(name, {
          x,
          y,
          size: fontSize,
          font,
          color: rgb(0, 0, 0), // Black text color
        });

        // Save the modified PDF
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });

        // Trigger the download
        saveAs(blob, `${name}-${certificateType}-certificate.pdf`);
        console.log('Certificate download triggered.');
      } catch (error) {
        console.error('Error generating certificate:', error);
        downloadTriggeredRef.current = false; // Allow retry if there's an error
      }
    };

    // Run the certificate generation process
    generateCertificate();
  }, [name, certificateType]); // Only rerun if `name` or `certificateType` changes

  return null; // No UI elements, this is a background functional component
};

export default CertificateDownload;