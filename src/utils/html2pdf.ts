import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
export const htmlToPDF = async (htmlId: string, title: string = "报表", bgColor = "#fff") => {
    let pdfDom: HTMLElement | null = document.getElementById(htmlId) as HTMLElement
    pdfDom.style.padding = '0 10px !important'
    const A4Width = 592.28;
    const A4Height = 841.89;
    let canvas = await html2canvas(pdfDom, {
        scale: 2,
        useCORS: true,
        backgroundColor: bgColor,
    });
    let pageHeight = (canvas.width / A4Width) * A4Height;
    let leftHeight = canvas.height;
    let position = 0;
    let imgWidth = A4Width;
    let imgHeight = (A4Width / canvas.width) * canvas.height;
    /*
     根据自身业务需求  是否在此处键入下方水印代码
    */
    let pageData = canvas.toDataURL("image/jpeg", 1.0);
    let PDF = new jsPDF("p", 'pt', 'a4');
    if (leftHeight < pageHeight) {
        PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
    } else {
        while (leftHeight > 0) {
            PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= A4Height;
            if (leftHeight > 0) PDF.addPage();
        }
    }
    PDF.save(title + ".pdf");
}