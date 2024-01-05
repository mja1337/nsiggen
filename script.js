document.getElementById('generateButton').addEventListener('click', function() {
    const fullName = document.getElementById('fullName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const subsidiary = document.getElementById('subsidiary').value;

    let website, officeAddress, companyReg;

    switch (subsidiary) {
        case 'UK':
            website = 'www.accora.care';
            officeAddress = 'Charter House, Barrington Road, Orwell, Cambridge, SG8 5QP, UK, +44 (0) 1223 206 100';
            companyReg = 'Accora Ltd. registered in England with Reg. No. 4915604 with registered office at Charter House, Barrington Road, Orwell, Cambridgeshire, SG8 5QP.';
            break;
        case 'US':
            website = 'www.us.accora.care';
            officeAddress = '9210 Corporate Blvd. - Suite 120, Rockville, MD 20850, USA, +1 301 560 2400';
            companyReg = 'Accora Inc, registered in the USA with office at 9210 Corporate Blvd. - Suite 120, Rockville, MD 20850, USA.';
            break;
        case 'IE':
            website = 'www.accora.care';
            officeAddress = '38 Main Street, Swords, Co. Dublin, Ireland, K67 E0A2, +353 1 695 0614';
            companyReg = 'Accora Ltd., registered in Ireland with Reg. No, 644783 with registered office at 38 Main Street, Swords, Co. Dublin, Ireland, K67 E0A2.';
            break;
    }

    const signatureHTML = `
        <table style="border-collapse: collapse;">
            <tr><td><span style="color:#008871; font-weight:bold; font-size:12pt;">${fullName}</span></td></tr>
            <tr><td>${jobTitle}</td></tr>
            <tr><td><img src="https://4810497.app.netsuite.com/core/media/media.nl?id=5310083&c=4810497&h=6f192d52d5a23c9c9685" target="_blank" alt="Accora Logo" height="37" width="100" style="padding:5px 0px 5px 0px;"></td></tr>
        </table>
        <table style="border-collapse: collapse;">
            <tr><td><span style="color:#008871; font-weight:bold;">T: </span></td><td>${phoneNumber}</td></tr>
            <tr><td><span style="color:#008871; font-weight:bold;">E: </span></td><td>${emailAddress}</td></tr>
            <tr><td><span style="color:#008871; font-weight:bold;">W: </span></td><td>${website}<br></td></tr>
        </table>
        <table style="border-collapse: collapse;">
            <td><p>${officeAddress}</p></td>
            <tr><td>
                <p style="font-size:8px; width:665px;">This communication is strictly confidential and is intended for the addressee(s) named above. If you are not the intended recipient, or have received this communication in error, do not print, copy or read it; it must be removed from your computer immediately and Accora should be informed by telephone. The contents of this email must not be disclosed to any other party without the express permission of Accora. Accora does not accept any liability for any loss or damage which may occur through using this email or any of its attachments. This email does not constitute a contractual agreement; such are only valid in hard copy by fax or post. 
                ${companyReg}
                </p>
            </td></tr>
        </table>
    `;


const fullSignatureHTML = `
        <html>
        <body>
            ${signatureHTML}
        </body>
        </html>
    `;


    document.getElementById('signaturePreview').innerHTML = signatureHTML;
    document.getElementById('htmlOutput').textContent = fullSignatureHTML;
    document.getElementById('signaturePreviewSection').style.display = 'block'; // Show the signature preview
    document.getElementById('htmlOutputSection').style.display = 'block'; // Show the HTML output section

});

document.getElementById('copyButton').addEventListener('click', function() {
    const htmlContent = document.getElementById('htmlOutput').textContent;
    navigator.clipboard.writeText(htmlContent).then(() => {
        alert('Signature HTML copied to clipboard!');
    });
});